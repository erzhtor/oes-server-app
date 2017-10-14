
declare module 'koa-graphql' {
    import { IMiddleware } from "koa-router";
    interface KoaGraphqlConfig {
        schema: any
        graphiql: boolean
    }

    function graphqlHTTP(config: KoaGraphqlConfig): IMiddleware;

    export = graphqlHTTP
}
