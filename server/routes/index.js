const express = require("express");

const weatherRouter = require("./weather");
const locationDataRouter = require("./locationData");
const photoRouter = require("./photos");

const app = express();

app.use("/weather", weatherRouter);
app.use("/locationData", locationDataRouter);
app.use("/photos", photoRouter);

module.exports = app;
