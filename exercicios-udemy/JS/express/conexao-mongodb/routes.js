// Imports
const express = require('express');
const router = express.Router();

// Imports controllers
const home = require('./src/controllers/homeController');

// Response
// home
router.get('/', home.home);

// Export Router
exports.router = router;