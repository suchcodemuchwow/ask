"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const client_1 = require("@prisma/client");
const process = require("process");
const prisma = new client_1.PrismaClient();
async function main() {
    const post = await prisma.post.create({
        data: {
            id: (0, uuid_1.v4)(),
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
//# sourceMappingURL=seed.js.map