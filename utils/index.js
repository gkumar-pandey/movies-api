const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/**
 * @description compare plain text password with hashed password for match
 * @param {String} password - The plain text password
 * @param {String} existingPassword - The hashed password stored in the database
 * @returns {Boolean} - True if the password matched, False otherwise.
 */
const comparePassword = async (password, existingPassword) => {
  try {
    const isPassMatched = await bcrypt.compare(password, existingPassword);
    return isPassMatched;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * @description Generates a JWT (JSON Web Token) using the provided payload.
 * @param {Object} payload - Object contains user id and email
 * @returns {String} - The generated JWT token.
 */
const generateToken = (payload) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  return token;
};

/**
 * @description Decodes a JWT (JSON Web Token) to extract the original payload.
 * @param {String} token - The JWT token to decode.
 * @returns {Object} - The decoded token payload.
 */
const decodeToken = (token) => {
  const SECRET_KEY = process.env.SECRET_KEY;
  const decodedToken = jwt.verify(token, SECRET_KEY);
  return decodedToken;
};

/**
 * @description Extracts the user ID from a decoded JWT (JSON Web Token) payload.
 * @param {Object} decodedToken - The decoded JWT token containing user information.
 * @returns {String} - The user ID extracted from the token.
 * @throws {Error} - If the user ID is missing or invalid in the token.
 */
const extractUserIdFromToken = (decodedToken) => {
  if (decodedToken && decodedToken._id) {
    return decodedToken._id;
  } else {
    throw new Error("Invalid or missing user id in token");
  }
};

/**
 * @description hash a plain text password using bcrypt
 * @param {String} password -The plain text password to hash
 * @returns {String} hashed password
 * @throws {Error} - If error occurs during hashing process.
 */
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

/**
 * @description calculate average rating from array of reviews
 * @param {Array} reviews - Array of object contains rating
 * @return {Number} - average rating
 */
const getAverageRating = (reviews) => {
  const averageRating =
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;
  return averageRating;
};

module.exports = {
  hashPassword,
  generateToken,
  comparePassword,
  decodeToken,
  extractUserIdFromToken,
  getAverageRating,
};
