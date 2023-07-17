import { db } from "./connection";

export const DB = {
  customers: async () => {
    const result = await db.select().from('customers');
    return result;
  },
};
