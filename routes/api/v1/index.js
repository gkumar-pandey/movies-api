const express = require("express");
const movieRouter = require("./movies.route");
const authRoutes = require("./auth.routes");
const userRoutes = require("./users.route");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json("Hello express");
});
routes.use("/movies", movieRouter);
routes.use("/auth", authRoutes);
routes.use("/user", userRoutes);

module.exports = routes;
