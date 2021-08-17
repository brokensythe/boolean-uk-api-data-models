const db = require("../../utils/client")

async function getAll(req, res) {
    try {
        const designers = await db.designers.findMany()
        res.json({ designers })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

async function getOne(req, res) {
    const id = Number(req.params.id)
    try {
        const designer = await db.designers.findUnique({
            where: {
                id
            }
        })
        res.json({ designer })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

async function addOne(req, res) {
    const designer = req.body 
    try {
        const designerResponse = await db.designers.create({
            data : designer
        })
        res.json({ designer: designerResponse })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

module.exports = { getAll, getOne, addOne }