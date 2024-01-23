const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const comparePassword = async (password, existingPassword) => {
  try {
    const isPassMatched = await bcrypt.compare(password, existingPassword);
    return isPassMatched;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const generateToken = (payload) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  return token;
};

const decodeToken = (token) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  const decodedToken = jwt.verify(token, SECRET_KEY);
  return decodeToken;
};

const extractUserIdFromToken = (decodedToken) => {
  if (decodeToken && decodeToken._id) {
    return decodeToken._id;
  } else {
    throw new Error("Invalid or missing user id in token");
  }
};

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  hashPassword,
  generateToken,
  comparePassword,
  decodeToken,
  extractUserIdFromToken,
};
