const weather = require("express").Router();
const axios = require("axios");

weather.get("/", async (req, res) => {
  const geo = { lat: req.query.lat, lon: req.query.lon };

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_ONE_CALL}?lat=${geo.lat}&lon=${geo.lon}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
    );
    const data = await response.data;
    res.send(data);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = weather;
