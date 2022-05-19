const { Sequelize, Model } = require('sequelize');
const bcryptjs = require('bcryptjs');
const sequelize = require('../config/database');

class User extends Model {
  passwordIsValid = (password) => bcryptjs.compare(password, this.password_hash);
}
User.init({
  nome: {
    type: Sequelize.STRING,
    defaultValue: '',
    validate: {
      len: {
        args: [3, 50],
        msg: 'Campo nome deve conter entre 3 a 50 caracteres',
      },
    },
  },
  email: {
    type: Sequelize.STRING,
    defaultValue: '',
    unique: {
      msg: 'E-mail já existente',
    },
    validate: {
      isEmail: {
        msg: 'E-mail inválido',
      },
    },
  },
  password_hash: {
    type: Sequelize.STRING,
    defaultValue: '',
  },
  password: {
    type: Sequelize.VIRTUAL,
    defaultValue: '',
    validate: {
      len: {
        args: [3, 50],
        msg: 'A senha precisa ter entre 3 a 50 caracteres',
      },
    },
  },
}, {
  sequelize,
});

User.addHook('beforeSave', async (user) => {
  if (user.password) user.password_hash = await bcryptjs.hash(user.password, 8);
});

module.exports = User;
