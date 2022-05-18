const express = require("express");

const weatherRouter = require("./weather");
const pollutionRouter = require("./pollution");
const locationDataRouter = require("./locationData");
const photoRouter = require("./photos");

const app = express();

app.use("/weather", weatherRouter);
app.use("/pollution", pollutionRouter);
app.use("/locationData", locationDataRouter);
app.use("/photos", photoRouter);

module.exports = app;
