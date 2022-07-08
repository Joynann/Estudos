const { Sequelize } = require('sequelize');
const Aluno = require('./Aluno');
const sequelize = require('../config/database');
const dataConfig = require('../config/dataConfig');

const Foto = sequelize.define('foto', {
  originalname: {
    type: Sequelize.STRING,
    defaultValue: '',
    validate: {
      notEmpty: {
        msg: 'O campo não pode estar vazio.',
      },
    },
  },
  filename: {
    type: Sequelize.STRING,
    defaultValue: '',
    validate: {
      notEmpty: {
        msg: 'O campo não pode estar vazio.',
      },
    },
  },
  url: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${dataConfig.url}/images/${this.getDataValue('filename')}`;
    },
  },
});

Foto.belongsTo(Aluno, { foreignKey: 'aluno_id' });
Aluno.hasMany(Foto);

module.exports = Foto;
