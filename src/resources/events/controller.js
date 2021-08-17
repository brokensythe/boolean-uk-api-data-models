const db = require("../../utils/client")
const { parseTime } = require("../../utils/helper")

async function getAll(req, res) {
    try {
        const events = await db.events.findMany()
        let eventsWithDate = []
        for (const event of events) {
            const eventWithDate = parseTime(event)
            eventsWithDate.push(eventWithDate)
        }
        res.json({ events: eventsWithDate })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

async function getOne(req, res) {
    const id = Number(req.params.id)
    try {
        const event = parseTime(await db.events.findUnique({
            where: {
                id
            }
        }))
        
        res.json({ event })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

async function addOne(req, res) {
    const event = req.body 
    try {
        const eventResponse = await db.events.create({
            data : event
        })
        res.json({ event: eventResponse })
    } catch (error) {
        console.error("An error has been pushed back from the DB ", error);
        res.json({ error })
    }
}

module.exports = { getAll, getOne, addOne }