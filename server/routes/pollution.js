const pollution = require("express").Router();
const axios = require("axios");

pollution.get("/", async (req, res) => {
  const geo = { lat: req.query.lat, lon: req.query.lon };

  // the dayPrev converts the current date (milliseconds) to seconds, then subtracts 24hrs
  const prevDay = Math.floor(Date.now() / 1000 - 86400);
  const nextDay = Math.floor(Date.now() / 1000 + 86400);
  const start = prevDay;
  const end = nextDay;

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_POLLUTION}?lat=${geo.lat}&lon=${geo.lon}&start=${start}&end=${end}&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.data;
    res.send(data);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = pollution;
