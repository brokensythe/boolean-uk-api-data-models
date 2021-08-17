var express = require('express');
var logger = require('morgan');
const designerRouter = require('./src/resources/designers/routes');
const eventRouter = require('./src/resources/events/routes');
const guestRouter = require('./src/resources/guests/routes');
const modelRouter = require('./src/resources/models/routes');
const outfitRouter = require('./src/resources/outfits/routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use("/designers", designerRouter)
app.use("/events", eventRouter)
app.use("/guests", guestRouter)
app.use("/models", modelRouter)
app.use("/outfits", outfitRouter)

app.all("*", (req, res)=>{
    res.status(404).json({ msg: "This is not a valid url" })
})

module.exports = app;
