// Import Express
const express = require('express');
const app = express();
// Import controller
const controller = require('./routes');

// app use routers
app.use(express.urlencoded({extended: true}));
app.use(controller.router);

// listening port
app.listen(3000, () =>
{
    console.log('http://localhost:3000');
});
