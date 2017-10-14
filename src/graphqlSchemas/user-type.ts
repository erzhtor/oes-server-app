import {
    GraphQLInt,
    GraphQLObjectType,
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
                return 'some name';
            },
        },
        login: {
            type: GraphQLString,
            resolve: (data) => 'some login',
        },
        email: {
            type: GraphQLString,
            resolve: (data) => 'e@e.e',
        },
        singupDate: {
            type: GraphQLString,
            resolve: (data) => 'some signup date',
        },
    }),
});

export { UserType };
