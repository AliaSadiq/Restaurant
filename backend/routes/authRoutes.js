const express = require('express');
const { signup, login, getDashboard, verifyEmail } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Dashboard route (protected)
router.get('/dashboard', protect, getDashboard);

// Email verification route
router.get('/verify-email/:token', verifyEmail);

module.exports = router;
