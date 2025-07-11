const express = require('express');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Accessible only with valid token
router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: `Welcome to dashboard, user ${req.user.email}` });
});

// Admin route (protected)
router.get('/admin', verifyToken, (req, res) => {
  res.json({ message: `Hello Admin ${req.user.email}` });
});

module.exports = router;
