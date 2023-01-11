const express = require("express");
const app = express();
const port = 8080;
// const fs = require("fs");
const data = require("./data.json");

app.get("/", (req, res) => {
  res.json(data);
  res.end();
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: http://localhost:${port}`);
});

module.exports = app;
