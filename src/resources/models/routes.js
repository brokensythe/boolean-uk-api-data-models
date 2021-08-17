const modelRouter = require("express").Router()
const { getAll, getOne, addOne } = require("./controller")

modelRouter.get("/", getAll)

modelRouter.get("/:id", getOne)

modelRouter.post("/", addOne)

modelRouter.patch("/:id", ()=>{})

modelRouter.delete("/:id", ()=>{})

module.exports = modelRouter