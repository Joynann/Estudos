// Imports (Express, path, route)
const path = require('path');

const express = require('express');
const app = express();

const controller = require('./routes');
const middlewares = require('./src/middlewares/middleware');

// set views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// use
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

// Middlewares
app.use(middlewares.middlewareGlobal);
app.use(controller.router);

// listening port
app.listen(3000, () =>
{
    console.log('http://localhost:3000');
});