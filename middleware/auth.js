const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get Token fron header
  const token = req.header("x-auth-token");

  // Check If no token
  if (!token) {
    return res.status(401).json({ msg: "No Token, authorization denied" });
  }

  // Verify the token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
