import {
    GraphQLInt,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} from 'graphql';
const UserType = new GraphQLObjectType({
    name: 'User',
    description: '...',
    fields: () => ({
        id: {
            type: GraphQLInt,
            resolve: (data) => 1,
        },
        name: {
            type: GraphQLString,
            args: {
                lang: { type: GraphQLString },
            },
            resolve: (data, args) => {
                return 'tada';
            },
        },
        login: {
            type: GraphQLString,
            resolve: (data) => 'erzhtor',
        },
        email: {
            type: GraphQLString,
            resolve: (data) => 'e@e.e',
        },
        singupDate: {
            type: GraphQLString,
            resolve: (data) => 'tada',
        },
    }),
});

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',
        fields: {
            user: {
                type: UserType,
                resolve: (data, args, context) => null,
            },
        },
    }),
});
