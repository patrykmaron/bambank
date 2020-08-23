import dotenv from "dotenv";
import knex from "knex";
import onDeath from "death";

dotenv.config();

// Connection details to DB
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;

const db_connection = `postgres://${user}:${password}@${host}:${port}/${database}`;

const db = knex({
  client: "pg",
  connection: db_connection,
  debug: false,
  pool: { min: 1, max: 5 },
});

onDeath(() => {
  db.destroy();
});

export default db;
