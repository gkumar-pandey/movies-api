const User = require("../model/user.modal");
const { comparePassword } = require("../utils");

/**
 * @route POST /user/password
 * @description Handles the change of user passwords.
 * @param {Object} req - Express request object containing user credentials and new password.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response indicating password change success or failure.
 */
const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user.id;
  try {
    // check user exist
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    // check password
    const isPasswordMatched = comparePassword(currentPassword, user.password);
    if (!isPasswordMatched) {
      return res
        .status(401)
        .json({ success: false, message: "current password not matched" });
    }
    // update user password
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { password: newPassword },
      { new: true }
    );
    // send response with updated user data
    res.status(200).json({
      success: true,
      message: "Password updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    res.status(401).json({ error: "Invalid credentials" });
    throw error;
  }
};

/**
 * @route POST /api/v1/user/profile
 * @description update the profile image of user
 * @param {Object} req Express request object contains user id in params & new profile picture url in body
 * @param {Object} res Express response object contains updated user or error
 * @returns
 */
const changeProfilePicture = async (req, res) => {
  const { newProfilePicture } = req.body;
  const { userId } = req.params;
  if (userId !== req.user.userId) {
    return res
      .status(401)
      .json({ message: "Unauthorised access, please add the token" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profileImageUrl: newProfilePicture },
      { new: true }
    );

    // hide password
    updatedUser.password = undefined;

    // send updated user
    res.status(200).json({
      success: true,
      message: "Profile picture updated.",
      user: updatedUser,
    });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "Internal server error", error });
    throw error;
  }
};

/**
 * @route POST /api/v1/user/update-contact
 * @description
 * @param {*} req
 * @param {*} res
 */
const updateContactDetails = async (req, res) => {
  const { phoneNumber, address } = req.body;
  const userId = req.user.id;
  try {
    // find user
    const user = await User.findById(userId);
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not found." });
    }

    // update user contact details
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { phoneNumber, address },
      { new: true }
    );
    // hide password
    updatedUser.password = undefined;
    // send response with updated user data
    res.status(200).json({
      message: "contact details updated",
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, error, message: "Internal server error" });
    throw error;
  }
};

const findUserByPhoneNumber = async (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  try {
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    // hide the password
    user.password = false;
    // response with user
    res.status(200).json({ success: true, message: "user found", user: user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", error });
    throw error;
  }
};

module.exports = {
  changePassword,
  changeProfilePicture,
  updateContactDetails,
  findUserByPhoneNumber,
};
