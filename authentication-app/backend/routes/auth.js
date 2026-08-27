const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

const router = express.Router();

// Secret Key
const SECRET_KEY = "mysecretkey";

// In-Memory User Storage
let users = [];

/* ===========================
   Register User
=========================== */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if all fields are filled
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // Check if user already exists
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password: hashedPassword
    };

    users.push(newUser);

    res.status(201).json({
      message: "Registration Successful"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
});

/* ===========================
   Login User
=========================== */
router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = users.find(user => user.email === email);

  if (!user) {
    return res.status(400).json({
      message: "User not found"
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(400).json({
      message: "Invalid Password"
    });
  }

  // Generate JWT Token
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email
    },
    SECRET_KEY,
    {
      expiresIn: "1h"
    }
  );

  res.json({
    message: "Login Successful",
    token
  });
});

/* ===========================
   Protected Route
=========================== */
router.get("/dashboard", auth, (req, res) => {

  res.json({
    message: "Welcome to Dashboard",
    user: req.user
  });

});

module.exports = router;