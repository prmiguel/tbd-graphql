import { DB } from "../db/db";

export const Resolvers = {
  Query: {
    customers: async () => await DB.customers(),
    customer: async (parent, args, context, info) => {
      const { customerNumber } = args;
      return (await DB.customers()).find((c) => c.customerNumber == customerNumber);
    },
  },
};
