const express = require("express");
const {
  signup,
  login,
  changePassword,
  changeProfilePicture,
  updateContactDetails,
} = require("../controller/users.controller");
const UserRoute = express.Router();

UserRoute.post("/signup", signup);
UserRoute.post("/login", login);
UserRoute.post("/change-password", changePassword);
UserRoute.post("/change-profile-picture", changeProfilePicture);
UserRoute.post("/update-contact/:email", updateContactDetails);

module.exports = UserRoute;
