const { PrismaClient } = require("@prisma/client")

const { models, designers, guests, events, outfits } = require("./mockData")

const prisma = new PrismaClient()

console.log("Here are my imports, ", models, designers, guests, events, outfits);

async function seed() {
    for (const model of models) {
        await prisma.models.create({
            data: model
        })
    }

    for (const designer of designers) {
        await prisma.designers.create({
            data: designer
        })
    }

    for (const guest of guests) {
        await prisma.guests.create({
            data: guest
        })
    }

    for (const event of events) {
        await prisma.events.create({
            data: event
        })
    }

    for (const outfit of outfits) {
        await prisma.outfits.create({
            data: outfit
        })
    }
}

seed()
.catch((e)=>{
    console.error(e);
    process.exit(1)
})
.finally(async ()=>{
    await prisma.$disconnect()
})