const express = require("express");
const routes = express.Router();

routes.use("/api", require("./api"));

routes.get("/", (req, res) => {
  res.status(200).json("Hello Express");
});

module.exports = routes;
