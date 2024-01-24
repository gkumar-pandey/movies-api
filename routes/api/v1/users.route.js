const express = require("express");
const {
  changePassword,
  changeProfilePicture,
  updateContactDetails,
  findUserByPhoneNumber,
} = require("../../../controller/users.controller");
const authVerification = require("../../../middleware/authVerify");
const userRoutes = express.Router();

userRoutes.post("/password", authVerification, changePassword);
userRoutes.post("/profile", authVerification, changeProfilePicture);
userRoutes.post("/update-contact", authVerification, updateContactDetails);
userRoutes.get("/phone/:phoneNumber", findUserByPhoneNumber);

module.exports = userRoutes;
