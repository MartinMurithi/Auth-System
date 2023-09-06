// POST api/users/register
// POST api/users/auth  authenticate a user and give a Token
// POST api/users/logout  logout user and clear cookie
// GET api/users get all users
// PUT api/user/updateProfile

const express = require("express");
const router = express.Router();
const { registerUser, fetchUsers, authUser, logout, fetchUser } = require("../controllers/userController");
const protect = require("../middlewares/auth");

router.post('/api/users/register', registerUser);
router.post('/api/users/auth', authUser);
router.post('/api/users/logout', logout);
router.get('/api/users', fetchUsers);
router.get('/api/user/:id', protect, fetchUser);

module.exports = router;