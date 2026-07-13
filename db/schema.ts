import { pgTable, serial, text, numeric, timestamp } from 'drizzle-orm/pg-core'

export const soaps = pgTable('soaps', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  picture: text('picture').notNull(),
  description: text('description'),
  status: text('status').notNull().default('active'),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  deletedAt: timestamp('deleted_at', { withTimezone: true }),
})