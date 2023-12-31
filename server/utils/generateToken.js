const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_KEY, {
    expiresIn: "2h",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: true,
    maxAge: 2 * 60 * 60 * 1000,
  });
};

const destroyToken = (res) => {
  res.cookie("jwt", '', {
    httpOnly: true,
    expires: new Date(0)
  });
};

module.exports = {generateToken, destroyToken};
