import postgres from 'postgres'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const sql = postgres(process.env.DATABASE_URL!)

async function seed() {
  console.log('🌱 Seeding soaps...')

  await sql`DELETE FROM soaps`

  await sql`
    INSERT INTO soaps (name, picture, description, status, price) VALUES
    ('Luscious Lavender', 'https://res.cloudinary.com/dr9lh95nh/image/upload/v1783834260/soap6_c8y4nc.jpg', 'Soothing lavender soap perfect for relaxation', 'active', 50),
    ('Marble Mayhem',     'https://res.cloudinary.com/dr9lh95nh/image/upload/v1783834258/soap4_sieqrk.jpg', 'Deep cleansing charcoal soap for face and body', 'active', 60),
    ('Sandal Sodomy',     'https://res.cloudinary.com/dr9lh95nh/image/upload/v1783834257/soap3_v3pr0l.jpg', 'Moisturizing honey and oatmeal soap', 'active', 40),
    ('Vanilla Vianza',    'https://res.cloudinary.com/dr9lh95nh/image/upload/v1783834254/soap1_ergcnf.jpg', 'Luxurious rose petal soap with subtle fragrance', 'active', 30),
    ('Choco Cakuza',      'https://res.cloudinary.com/dr9lh95nh/image/upload/v1783834255/soap5_yxm0kv.jpg', 'Energizing peppermint soap for morning showers', 'inactive', 50),
    ('Oliver Orally',     'https://res.cloudinary.com/dr9lh95nh/image/upload/v1783834252/soap2_nouhfk.jpg', 'Cleansing oliver soap for midnight showers', 'inactive', 30)
  `

  console.log('✅ Seeded 6 soaps')
  await sql.end()
}

seed().catch((e) => {
  console.error('❌ Seed failed:', e)
  process.exit(1)
})