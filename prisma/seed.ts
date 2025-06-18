import { prisma } from "@/prisma";

async function seed() {
  await prisma.user.createMany({
    data: [
      {
        name: "Everton Oliveira",
        email: "everton@gmail.com",
      },
      {
        name: "Elisangela Oliveira",
        email: "elisangela@gmail.com",
      },
    ],
  });
}

seed().then(() => {
  console.log("Database seed! 🎲");
  prisma.$disconnect();
});
