const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const validateEmail = require("../utils/emailValidator");
const { generateToken, destroyToken } = require("../utils/generateToken");
const SALT_ROUNDS = 10;

// @desc    Register a new user
// @route   /api/users/register
// @access  Protected
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Validate if email format is correct
    const isValid = validateEmail(email);
    if (!isValid) return res.status(400).json({ error: "Bad email format" });

    const userExist = await User.findOne({ email });
    if (userExist)
      return res.status(400).json({ error: "User already exists" });

    const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = new User({
      name: name,
      email: email,
      password: hashPassword,
    });
    await newUser.save();
    generateToken(res, newUser._id);
    res.status(201).json({ message: "User registered", newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    Fetch all users
// @Route   /api/users
// @Access  Public
const fetchUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ count: users.length, users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    Authorize user, generate token
// @Route   /api/auth
// @Access  public
const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Invalid email or password" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    generateToken(res, user._id);
    res.status(200).json({ message: "LogIn successful", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    Logout user out by destroying cookie
// @Route   /api/logout
// @Access  Public
const logout = async (req, res) => {
  try {
    destroyToken(res);
    res.status(200).json({ message: "Logged out" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fetchUser = async (req, res) => {
  try {
    res.status(200).json({ message: "user account" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser, fetchUsers, authUser, logout, fetchUser };
