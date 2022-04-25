// Imports
const express = require('express');
const router = express.Router();

// Imports controllers
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Response
// home
router.get('/', homeController.index);

// Login
router.get('/login', loginController.index);

// Export Router
exports.router = router;