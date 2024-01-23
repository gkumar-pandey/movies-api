const express = require("express");
const {
  changePassword,
  changeProfilePicture,
  updateContactDetails,
  findUserByPhoneNumber,
} = require("../../../controller/users.controller");
const authVerification = require("../../../middleware/authVerify");
const userRoutes = express.Router();

userRoutes.post("/:userId/password", changePassword);
userRoutes.post("/:userId/profile", authVerification, changeProfilePicture);
userRoutes.post(
  "/update-contact/:email",
  authVerification,
  updateContactDetails
);
userRoutes.get("/phone/:phoneNumber", findUserByPhoneNumber);

module.exports = userRoutes;
