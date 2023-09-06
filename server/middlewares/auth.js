const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const protect = async (req, res, next) => {
  try {
    let token;
    token = req.cookies.jwt;

      if (token) {
          const decoded = jwt.verify(token, process.env.JWT_KEY);
          req.user = await User.findById(decoded.userId).select("-password");
          next();
    } else {
      res.status(401).json({ error: "Not authorized, no token" });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = protect;