const path = require('path');
// Import Express
const express = require('express');
const app = express();
// Import controller
const controller = require('./routes');

// set views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// app use routers
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(controller.router);

// listening port
app.listen(3000, () =>
{
    console.log('http://localhost:3000');
});
