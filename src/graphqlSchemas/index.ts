import * as config from 'config';
import * as fs from 'fs';

import { IOrderModel, Order, User } from './../dbModels';

import { IAppConfig } from './../interfaces/app-config';
import { buildSchema } from 'graphql';
import { connect } from 'mongoose';

import graphqlHTTP = require('koa-graphql');

const appConfig = config.get<IAppConfig>('appConfig');

connect(appConfig.dbConnection);
const typeDef = fs.readFileSync(appConfig.pathToGraphqlTypeDef, 'utf-8');

const schema = buildSchema(typeDef);

const graphqlMiddleware = graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: {
        user: async ({ id }: { id: string }) =>
            await User.findById(id),
        order: async ({ id }: { id: string }) =>
            await Order.findById(id),
        createOrder: async ({ title, description }: { title: string, description: string }) =>
            await Order.create({
                title,
                description,
            } as IOrderModel),
        orders: async () => {
            return await Order.find();
        },
        users: async () => await User.find(),
    },
});

export { graphqlMiddleware, schema };
