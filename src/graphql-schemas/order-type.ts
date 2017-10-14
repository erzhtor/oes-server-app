import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';

const OrderType = new GraphQLObjectType({
    name: 'Order',
    description: '...',
    fields: () => ({
        id: {
            type: GraphQLInt,
            resolve: (data) => 1,
        },
        title: {
            type: GraphQLString,
            resolve: (data, args) => 'some title',
        },
        description: {
            type: GraphQLString,
            resolve: (data) => 'some description',
        },
        authorId: {
            type: GraphQLInt,
            resolve: (data) => 1,
        },
        creationDate: {
            type: GraphQLString,
            resolve: (data) => 'some creation date',
        },
    }),
});

export { OrderType };
