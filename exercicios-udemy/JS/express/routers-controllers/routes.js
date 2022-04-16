// Express imports
const express = require('express');
const router = express.Router();

// Controllers
const homeController = require('./controllers/homeController');
const paramsController = require('./controllers/paramsController');

// HOME
router.get('/', homeController.home);
router.post('/', homeController.postHome);

// Parametros
router.get('/parametros/:parametro?', paramsController.parametros);

// Export routers
exports.router = router;