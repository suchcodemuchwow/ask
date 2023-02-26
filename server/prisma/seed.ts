import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';
import * as process from 'process';

const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.create({
    data: {
      id: uuidv4(),
      body: 'New prisma entry',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  console.log(post);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
