import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { DB } from './db/db';
import { Resolvers } from './graphql/resolvers';
import { TypeDefs } from './graphql/definition';

(async() => {
  const server = new ApolloServer({
    typeDefs: TypeDefs,
    resolvers: Resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
})();

// (async() => {
//     const re = await DB.customers();
//     console.log(re)
// })()