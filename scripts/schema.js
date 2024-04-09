const { sql } = require('drizzle-orm');
const { sqliteTable, text } = require('drizzle-orm/sqlite-core');

const users = sqliteTable('users', {
  id: text('id').notNull().primaryKey(),
  name: text('name').notNull(),
  password: text('password').notNull(),
  email: text('email').notNull().unique(),
  createdAt: text('created_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

module.exports = {
  users,
};
