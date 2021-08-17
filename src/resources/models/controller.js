const db = require("../../utils/client")

async function getAll(req, res) {
    try {
        const models = await db.models.findMany()
        res.json({ models })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

async function getOne(req, res) {
    const id = Number(req.params.id)
    try {
        const model = await db.models.findUnique({
            where: {
                id
            }
        })
        res.json({ model })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

async function addOne(req, res) {
    const model = req.body 
    try {
        const modelResponse = await db.models.create({
            data : model
        })
        res.json({ model: modelResponse })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

module.exports = { getAll, getOne, addOne }