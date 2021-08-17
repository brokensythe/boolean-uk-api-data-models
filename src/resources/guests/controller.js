const db = require("../../utils/client")

async function getAll(req, res) {
    try {
        const guests = await db.guests.findMany()
        res.json({ guests })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

async function getOne(req, res) {
    const id = Number(req.params.id)
    try {
        const guest = await db.guests.findUnique({
            where: {
                id
            }
        })
        res.json({ guest })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

async function addOne(req, res) {
    const guest = req.body 
    try {
        const guestResponse = await db.guests.create({
            data : guest
        })
        res.json({ guest: guestResponse })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

module.exports = { getAll, getOne, addOne }