const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const Aluno = sequelize.define('aluno', {
  nome: Sequelize.STRING,
  sobrenome: Sequelize.STRING,
  email: Sequelize.STRING,
  idade: Sequelize.INTEGER,
  peso: Sequelize.FLOAT,
  altura: Sequelize.FLOAT,
});

module.exports = Aluno;
