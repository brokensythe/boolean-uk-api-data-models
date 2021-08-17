const db = require("../../utils/client")

async function getAll(req, res) {
    try {
        const outfits = await db.outfits.findMany()
        res.json({ outfits })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

async function getOne(req, res) {
    const id = Number(req.params.id)
    try {
        const outfit = await db.outfits.findUnique({
            where: {
                id
            }
        })
        res.json({ outfit })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

async function addOne(req, res) {
    const outfit = req.body 
    try {
        const outfitResponse = await db.outfits.create({
            data : outfit
        })
        res.json({ outfit: outfitResponse })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

module.exports = { getAll, getOne, addOne }