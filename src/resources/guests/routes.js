const guestRouter = require("express").Router()
const { getAll, getOne, addOne } = require("./controller")

guestRouter.get("/", getAll)

guestRouter.get("/:id", getOne)

guestRouter.post("/", addOne)

guestRouter.patch("/:id", ()=>{})

guestRouter.delete("/:id", ()=>{})

module.exports = guestRouter