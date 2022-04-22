// Imports
require('dotenv').config();
const path = require('path');

const express = require('express');
const app = express();

const controller = require('./routes');
const middlewares = require('./src/middlewares/middleware');

const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');

// const helmet = require('helmet');
const csrf = require('csurf');

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
app.use(json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

// Sessions
const sessionConfig = 
{
    secret: '4540GA651d$$ns16165Ssrt%dn56Dgfd',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTMONGODB }),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
}
app.use(session(sessionConfig));
app.use(flash());

// Segurança
app.use(helmet());
app.use(csrf());
app.use(middlewares.checkCsrfError);
app.use(middlewares.csrfMiddleware);

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