import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import * as io from 'socket.io';
import * as koaBodyParser from 'koa-bodyparser';

import { authorize, register, verify } from './routes/auth';

import { appConfig } from './helpers';
import { connect } from 'mongoose';
import { graphqlMiddleware } from './graphqlSchemas';

connect(appConfig.dbConnection);

const app = new Koa();

const router = new KoaRouter();
router.use(koaBodyParser());
router.
    get('/', (ctx: Koa.Context) => {
        ctx.body = 'Main page!';
    }).
    post('/login', authorize).
    post('/register', register).
    get('/protected', verify, async (ctx: Koa.Context) => {
        ctx.body = 'This is protected url';
    }).
    all('/graphql', graphqlMiddleware);
app.use(router.routes());

const server = app.listen(appConfig.port);

const socket = io(server);
socket.on('connection', () => {
    // tslint:disable-next-line:no-console
    console.log('connected');
});
