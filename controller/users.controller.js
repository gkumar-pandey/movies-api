const User = require("../model/user.modal");

// signup
const signup = async (req, res) => {
  const userData = req.body;
  try {
    const user = new User(userData);
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user account" });
  }
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && password === user.password) {
      res.status(200).json(user);
    } else {
      res.json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    throw error;
  }
};

const changePassword = async (req, res) => {
  const { email, currPassword, newPassword } = req.body;
  try {
    const user = User.findOne({ email });
    if (user.password === currPassword) {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        { password: newPassword },
        { new: true }
      );
      res.json(updatedUser);
    }
  } catch (error) {
    res.status(401).json({ error: "Invalid credentials" });
    throw error;
  }
};

const changeProfilePicture = async (req, res) => {
  const { email, newProfilePicture } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        { profilePicture: newProfilePicture },
        { new: true }
      );
      res.json(updatedUser);
    }
  } catch (error) {
    res.status(404).json({ error: "User not found!" });
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
  signup,
  login,
  changePassword,
  changeProfilePicture,
  updateContactDetails,
  findUserByPhoneNumber,
};
