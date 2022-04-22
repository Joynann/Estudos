// Imports
const express = require('express');
const router = express.Router();

// Imports controllers
const homeController = require('./src/controllers/homeController');

// Response
// home
router.get('/', homeController.home);

// Export Router
exports.router = router;