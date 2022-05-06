const express = require("express");
const api = require("./routes/index.js");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", api);

///// if in production send files to client build
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
