const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Signup Controller
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user with unverified status
    const user = await User.create({ username, email, password, isVerified: false });

    // Generate email verification token
    const verifyToken = generateToken(user._id);

    // Send verification email (implement the email sending logic here)
    // Example: await sendVerificationEmail(user.email, verifyToken);

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
      message: 'Signup successful! Please check your email to verify your account.',
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      if (!user.isVerified) {
        return res.status(400).json({ message: 'Please verify your email before logging in' });
      }
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Dashboard Controller
exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ username: user.username, email: user.email });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Email Verification Controller
exports.verifyEmail = async (req, res) => {
  const { token } = req.params;

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(400).send('Invalid or expired token');

    try {
      const user = await User.findById(decoded.id);
      if (!user) return res.status(400).send('User not found');

      user.isVerified = true;
      await user.save();

      res.send('Email verified successfully!');
    } catch (error) {
      res.status(500).send('Server error');
    }
  });
};
