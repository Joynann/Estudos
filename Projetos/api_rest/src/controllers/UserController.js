import User from '../models/User';
import database from '../config/database';

class UserController {
  async store(req, res) {
    try {
      await database.sync();
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
