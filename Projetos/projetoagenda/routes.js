// Imports
const express = require('express');
const router = express.Router();

// Imports controllers
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');
const middlewares = require('./src/middlewares/middleware');

// Response
// home
router.get('/', homeController.index);

// Login
router.get('/login', loginController.index);
router.get('/logout', loginController.logout);
router.post('/login/register', loginController.register);
router.post('/login/login', loginController.login);

// Cadastrar contato
router.get('/contato', middlewares.loginRequired, contatoController.index);
router.post('/contato/register', middlewares.loginRequired, contatoController.register);
router.get('/contato/editar/:id', middlewares.loginRequired, contatoController.editar);
router.post('/contato/edit/:id', middlewares.loginRequired, contatoController.edit);

// Export Router
exports.router = router;