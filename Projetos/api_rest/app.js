import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';

import homeRoute from './src/routes/homeRoute';
import userRoute from './src/routes/userRoute';
import tokenRoute from './src/routes/tokenRoute';
import alunoRoute from './src/routes/alunoRoute';
import fotoRoute from './src/routes/fotoRoute';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/users/', userRoute);
    this.app.use('/tokens/', tokenRoute);
    this.app.use('/alunos/', alunoRoute);
    this.app.use('/fotos/', fotoRoute);
  }
}

export default new App().app;
