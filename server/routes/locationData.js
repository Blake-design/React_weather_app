const locationData = require("express").Router();
const axios = require("axios");

locationData.get("/", async (req, res) => {
  const SearchInput = req.query.city || "san antonio";
  const fields = "formatted_address%2Cname%2Cphotos%2Cgeometry";
  const config = {
    method: "get",
    url: `${process.env.REACT_APP_FIND_PLACES}&input=${SearchInput}&inputtype=textquery&fields=${fields}&key=${process.env.REACT_APP_API_KEY_PLACES}`,
  };

  try {
    const response = await axios(config);
    const data = await response.data;

    res.send(data);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = locationData;
