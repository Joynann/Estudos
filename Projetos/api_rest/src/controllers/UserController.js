import User from '../models/User';
import database from '../config/database';

class UserController {
  async store(req, res) {
    try {
      await database.sync();
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const allUsers = await User.findAll();
      return res.json(allUsers);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID não enviado'] });

      const user = await User.findByPk(id);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });

      const newUser = await user.update(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ errors: ['ID não enviado'] });

      const user = await User.findByPk(id);
      if (!user) return res.status(400).json({ errors: ['Usuário não encontrado'] });

      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
