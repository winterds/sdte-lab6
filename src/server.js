const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Qwerty");
});

module.exports = app;
