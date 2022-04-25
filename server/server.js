const express = require("express");
const api = require("./routes/index.js");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/images", express.static("images"));
app.use("/api", api);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
