require("dotenv").config();

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

app.listen(process.env.PORT, () => {
  console.log("running on localhost", process.env.PORT);
});
