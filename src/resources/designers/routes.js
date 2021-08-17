const designerRouter = require("express").Router()
const { getAll, getOne, addOne } = require("./controller")

designerRouter.get("/", getAll)

designerRouter.get("/:id", getOne)

designerRouter.post("/", addOne)

designerRouter.patch("/:id", ()=>{})

designerRouter.delete("/:id", ()=>{})

module.exports = designerRouter