import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import * as config from 'config';
import * as io from 'socket.io';

import { IAppConfig } from './interfaces/app-config';
import { connect } from 'mongoose';
import { graphqlMiddleware } from './graphqlSchemas';

const appConfig = config.get<IAppConfig>('appConfig');
connect(appConfig.dbConnection);

const app = new Koa();

const router = new KoaRouter();
router
    .get('/', (ctx: Koa.Context) => {
        ctx.body = 'Main page!';
    }).get('/about', (ctx: Koa.Context) => {
        ctx.body = 'About page!';
    }).get('/redirect', async (ctx: Koa.Context) => {
        ctx.redirect('/');
    }).all('/graphql', graphqlMiddleware);

app.use(router.routes());

const server = app.listen(3000);

const socket = io(server);
socket.on('connection', () => {
    // tslint:disable-next-line:no-console
    console.log('connected');
});
