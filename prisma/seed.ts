import * as bcrypt from 'bcrypt'
import { PrismaClient } from '~/generated/prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = bcrypt.hashSync('admin123', 10)
  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@example.com',
      password: adminPassword,
      role: 'admin',
      fullName: 'Admin User',
      photo: 'https://example.com/admin.jpg',
      isActive: true,
    },
  })

  // Create judge user
  const judgePassword = bcrypt.hashSync('judge123', 10)
  await prisma.user.upsert({
    where: { username: 'judge1' },
    update: {},
    create: {
      username: 'judge1',
      email: 'judge@example.com',
      password: judgePassword,
      role: 'judge',
      fullName: 'Judge User',
      photo: 'https://example.com/judge.jpg',
      isActive: true,
      judgeNumber: 1,
    },
  })

  // Create regular user
  const userPassword = bcrypt.hashSync('user123', 10)
  await prisma.user.upsert({
    where: { username: 'user1' },
    update: {},
    create: {
      username: 'user1',
      email: 'user@example.com',
      password: userPassword,
      role: 'user',
      fullName: 'Regular User',
      photo: 'https://example.com/user.jpg',
      isActive: true,
    },
  })

  console.log('Seeding completed successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
