// Imports
require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();

const controller = require('./routes');
const middlewares = require('./src/middlewares/middleware');

const expressSession = require('express-session');
const connectFlash = require('connect-flash');
const connectMongo = require('connect-mongo');

const mongoose = require('mongoose');
const { connect } = require('http2');

// Connect MongoDB with mongoose;
mongoose.connect(process.env.CONNECTMONGODB)
.then(() =>
{
    console.log('Conectado ao Bando de Dados.');
    app.emit('conectado');
})
.catch(e => console.log(e));

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
app.on('conectado', () =>
{
    app.listen(3000, () =>
    {
        console.log('http://localhost:3000');
    });
});