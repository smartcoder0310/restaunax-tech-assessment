import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 50; i++) {
    await prisma.order.create({
      data: {
        customerName: `Customer ${i}`,
        customerEmail: `customer${i}@email.com`,
        orderType: i % 2 === 0 ? "delivery" : "pickup",
        status: "pending",
        total: 20 + i,
        preparationNotes: "No onions",
        items: {
          create: [
            {
              name: "Pizza",
              quantity: 1,
              price: 15,
              specialInstructions: "Extra cheese",
            },
            {
              name: "Coke",
              quantity: 2,
              price: 2.5,
            },
          ],
        },
      },
    });
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
