import { knex } from "knex";

export const db = knex({
  client: "mysql",
  connection: {
    host: "192.168.200.1",
    port: 3306,
    user: "user",
    password: "user",
    database: "mydb",
  },
});
