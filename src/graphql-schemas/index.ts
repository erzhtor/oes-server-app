import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { OrderType } from './order-type';
import { UserType } from './user-type';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',
        fields: {
            user: {
                type: UserType,
                resolve: (data, args, context) => null,
            },
            order: {
                type: OrderType,
                resolve: (data, args, context) => null,
            },
        },
    }),
});
