const dotenv = require('dotenv');
dotenv.config();
const { resolve } = require('node:path');
const { migrate } = require('drizzle-orm/libsql/migrator');
const { drizzle } = require('drizzle-orm/libsql');
const { createClient } = require('@libsql/client');

const client = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});
const db = drizzle(client);

async function main() {
  await migrate(db, { migrationsFolder: resolve(__dirname, '../drizzle') });
}

main();
