const models = [{
    firstname: "Janine",
    lastname: "Butcher",
    fee: 1000
}, {
    firstname: "Jamie",
    lastname: "Butcher",
    fee: 2000
}, {
    firstname: "Alice",
    lastname: "Baker",
    fee: 3000
}, {
    firstname: "Alan",
    lastname: "Wickes",
    fee: 4000
}, {
    firstname: "Jenny",
    lastname: "Frost",
    fee: 5000
}]

// firstname String
// lastname String
// fee Int

const designers = [{
    firstname: "Andrea",
    lastname: "Canolli"
}, {
    firstname: "Betty",
    lastname: "Croker"
}, {
    firstname: "Tammy",
    lastname: "James"
}, {
    firstname: "Eniola",
    lastname: "Oluwukandi"
}, {
    firstname: "Tommy",
    lastname: "Dreamer"
}]

// firstname String
// lastname String

const guests = [{
    firstname: "David",
    lastname: "Guest"
}, {
    firstname: "Andrew",
    lastname: "Rickman"
}, {
    firstname: "Tolu",
    lastname: "Adeosun"
}, {
    firstname: "Jorge",
    lastname: "Mendes"
}, {
    firstname: "Xiao",
    lastname: "Li"
}]

// firstname String
// lastname String

const events = [{
    name: "The Big Event",
    date: new Date("2019-12-17T16:24:00").toISOString(),
    time: new Date("2019-12-17T16:24:00").toISOString(),
    venue: "That local place",
    max_capacity: 2000
}, {
    name: "The Big Event 2",
    date: new Date("2020-12-17T16:24:00").toISOString(),
    time: new Date("2020-12-17T16:24:00").toISOString(),
    venue: "That local place",
    max_capacity: 2000
}, {
    name: "The Big Event 3",
    date: new Date("2021-12-17T16:24:00").toISOString(),
    time: new Date("2021-12-17T16:24:00").toISOString(),
    venue: "That local place",
    max_capacity: 2000
}, {
    name: "The Fancy One",
    date: new Date("2019-04-17T19:00:00").toISOString(),
    time: new Date("2019-04-17T19:00:00").toISOString(),
    venue: "That massive place",
    max_capacity: 10000
}, {
    name: "The Fancy One 2",
    date: new Date("2020-04-17T19:00:00").toISOString(),
    time: new Date("2020-04-17T19:00:00").toISOString(),
    venue: "That massive place",
    max_capacity: 10000
}]

// name String
// date DateTime @db.Date
// time DateTime @db.Time(2)
// venue String
// max_capacity Int

const outfits = [{
    name: "fancy outfit",
    season: "Winter 2020",
    cost: 100,
    modelId: 1,
    designerId: 1,
    eventId: 1
}, {
    name: "shocking outfit",
    season: "Autumn 2019",
    cost: 200,
    modelId: 2,
    designerId: 2,
    eventId: 2
}, {
    name: "amazing outfit",
    season: "Winter 2019",
    cost: 300,
    modelId: 1,
    designerId: 2,
    eventId: 3
}, {
    name: "beautiful outfit",
    season: "Summer 2019",
    cost: 400,
    modelId: 5,
    designerId: 4,
    eventId: 1
}, {
    name: "wonderful outfit",
    season: "Spring 2019",
    cost: 500,
    modelId: 3,
    designerId: 4,
    eventId: 5
}]

// name String
// season String
// cost Int
// modelId Int
// designerId Int
// guestId Int?
// eventId Int

module.exports = { models, designers, guests, events, outfits }