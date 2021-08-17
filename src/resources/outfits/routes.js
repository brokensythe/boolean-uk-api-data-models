const outfitRouter = require("express").Router()
const { getAll, getOne,
addOne } = require("./controller")

outfitRouter.get("/", getAll)

outfitRouter.get("/:id", getOne)

outfitRouter.post("/", addOne)

outfitRouter.patch("/:id", ()=>{})

outfitRouter.delete("/:id", ()=>{})

module.exports = outfitRouter