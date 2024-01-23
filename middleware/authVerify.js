const { decodeToken, extractUserIdFromToken } = require("../utils");

const authVerification = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = decodeToken(token);
    const userId = extractUserIdFromToken(decodedToken);
    req.user = { userId };
    return next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized user" });
    throw error;
  }
};

module.exports = authVerification;
