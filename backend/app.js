const express = require("express");

const app = express();

app.use("/api/", (req, res) => {
  console.log("hit /");
  res.send("Hello there!");
});

module.exports = app;
