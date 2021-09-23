import { buildSchema } from 'type-graphql';
import { connect } from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import Express from "express";
import { AuthorResolver } from './resolvers/author.resolver';
import { databaseUrl } from '../config.json';

const main = async () => {
    const schema = await buildSchema({
        resolvers: [AuthorResolver],
        emitSchemaFile: true,
        validate: false
    });

    const mongoose = await connect(databaseUrl, {useNewUrlParser: true})
    await mongoose.connection;

    const server = new ApolloServer({schema});
    const app = Express();

    server.applyMiddleware({app});
    app.listen({port: 3333}, () =>
            console.log(`🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`))
};


main().catch((error) => {
    console.log(error, 'error');
});
