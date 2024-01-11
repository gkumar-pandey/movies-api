const express = require("express");
const {
  signup,
  login,
  changePassword,
  changeProfilePicture,
} = require("../controller/users.controller");
const UserRoute = express.Router();

UserRoute.post("/signup", signup);
UserRoute.post("/login", login);
UserRoute.post("/change-password", changePassword);
UserRoute.post("/change-profile", changeProfilePicture);

module.exports = UserRoute;
