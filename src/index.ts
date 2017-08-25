import * as Koa from "koa";
import * as io from 'socket.io';

const app = new Koa();

app.use((ctx: Koa.Context) => {
    ctx.body = "Hello Koa!";
});

const server = app.listen(3000);

const socket = io(server);
socket.on('connection', () => {
    // tslint:disable-next-line:no-console
    console.log('connected');
});