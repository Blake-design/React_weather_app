const photos = require("express").Router();
const axios = require("axios");

photos.get("/", async (req, res) => {
  const photo = req.query.photo;
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_UNSPLASH}?query=${photo}&orientation=landscape&content_filter=high&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
    );

    const data = await response.data;

    res.send(data);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = photos;
