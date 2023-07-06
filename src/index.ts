import knex from 'knex';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Persons {
    PersonID: Int,
    LastName: String
    FirstName: String
    Address: String
    City: String
  }

  type Query {
    persons: [Persons]
  }

  type Query {
    person(PersonID: Int!): Persons
  }
`;

const resolvers = {
  Query: {
    persons: async() => await getValues(),
    person: async(parent, args, context, info) => {
      const { PersonID } = args;
      return (await getValues()).find((a) => a.PersonID == PersonID)
    } 
  },
};

export const db = knex({
  client: "mysql",
  connection: {
    host: "192.168.0.200",
    port: 3306,
    user: "user",
    password: "user",
    database: "mydb",
  },
});

async function getValues() {
    const result = await db.queryBuilder().select().from('Persons');
    return result;
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

// (async() => {
//     const re = await getValues();
//     console.log(re)
// })()
