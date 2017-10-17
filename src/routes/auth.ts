import * as jwt from 'jsonwebtoken';

import { IUserModel, User } from './../dbModels/user';

import { Context } from 'koa';
import { IApiResponse } from './../interfaces';
import { appConfig } from '../helpers';

const authorize = async (ctx: Context) => {
    const { password, email } = ctx.request.body;
    const user = await User.findOne({ email, password });
    if (user === null) {
        ctx.body = { status: 'error', msg: 'user not exists' };
    } else {
        const token = jwt.sign({
            email: user.email,
            name: user.name,
            id: user.id,
        }, appConfig.jwtSecret);
        ctx.cookies.set('jwtToken', token);
        ctx.body = { status: 'success', jwtToken: token } as IApiResponse;
    }
};

const register = async (ctx: Context) => {
    const { password, email, name } = ctx.request.body;
    const user = await User.findOne({ email });
    if (user !== null) {
        ctx.body = { status: 'error', msg: 'email already exists' } as IApiResponse;
    } else if (!password) {
        ctx.body = { status: 'error', msg: 'password is required' } as IApiResponse;
    } else {
        await User.create({ name, email, password } as IUserModel);
        ctx.body = { status: 'success' } as IApiResponse;
    }
};

const verify = async (ctx: Context, next: any) => {
    const token = ctx.cookies.get('jwtToken');
    if (token) {
        const user = await jwt.verify(token, appConfig.jwtSecret);
        if (user) {
            ctx.body.user = user;
            next();
            return;
        }
    }
    ctx.status = 401;
    ctx.body = { status: 'error', msg: 'unauthorized' } as IApiResponse;
};

export { authorize, register, verify };
