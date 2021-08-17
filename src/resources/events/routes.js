const eventRouter = require("express").Router()
const { getAll, getOne, addOne } = require("./controller")

eventRouter.get("/", getAll)

eventRouter.get("/:id", getOne)

eventRouter.post("/", addOne)

eventRouter.patch("/:id", ()=>{})

eventRouter.delete("/:id", ()=>{})

module.exports = eventRouter