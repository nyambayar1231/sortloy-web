const dotenv = require('dotenv');
dotenv.config();
const { drizzle } = require('drizzle-orm/libsql');
const { createClient } = require('@libsql/client');
const { users: usersData } = require('../lib/placeholder-data');
const { users } = require('./schema');
const bcrypt = require('bcrypt');

const client = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});
const db = drizzle(client);

async function seedUsers() {
  try {
    for (const user of usersData) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return await db.insert(users).values({
        ...user,
        password: hashedPassword,
      });
    }
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  await seedUsers();
}

main();
