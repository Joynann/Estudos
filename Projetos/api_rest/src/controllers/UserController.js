import User from '../models/User';
import database from '../config/database';

class UserController {
  async store(req, res) {
    try {
      await database.sync();
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const allUsers = await User.findAll({
        attributes: ['id', 'nome', 'email'],
      });
      return res.json(allUsers);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId, {
        attributes: ['id', 'nome', 'email'],
      });
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });

      const updatedUser = await user.update(req.body);
      const { id, nome, email } = updatedUser;
      return res.json({
        id,
        nome,
        email,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });

      await user.destroy();

      const { id, nome, email } = user;
      return res.json({
        id,
        nome,
        email,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
