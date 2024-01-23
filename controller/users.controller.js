const User = require("../model/user.modal");
const { comparePassword } = require("../utils");

/**
 * @route POST /user/:userId/password
 * @description Handles the change of user passwords.
 * @param {Object} req - Express request object containing user credentials and new password.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response indicating password change success or failure.
 */
const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not exist" });
    }

    const isPasswordMatched = comparePassword(currentPassword, user.password);

    if (!isPasswordMatched) {
      return res.status(500).json({ message: "current password not matched" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { password: newPassword },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Password updated successfully.", user: updatedUser });
  } catch (error) {
    res.status(401).json({ error: "Invalid credentials" });
    throw error;
  }
};

const changeProfilePicture = async (req, res) => {
  const { newProfilePicture } = req.body;
  const userId = req.params;
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
    res.status(201).json({
      message: "Profile picture updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    res.status(404).json({ error: "Internal server error" });
    throw error;
  }
};

const updateContactDetails = async (req, res) => {
  const { phoneNumber, address } = req.body;
  const email = req.params.email;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        { phoneNumber, address },
        { new: true }
      );
      res.json(updatedUser);
    } else {
      res.json({ error: "User not found" });
    }
  } catch (error) {
    res.status(404).json({ error: "Internal server error" });
  }
};

const findUserByPhoneNumber = async (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  try {
    const user = await User.findOne({ phoneNumber });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  changePassword,
  changeProfilePicture,
  updateContactDetails,
  findUserByPhoneNumber,
};
