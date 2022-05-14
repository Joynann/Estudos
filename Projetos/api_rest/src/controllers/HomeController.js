import Aluno from '../models/Aluno';
import database from '../config/database';

class HomeController {
  async index(req, res) {
    await database.sync();
    const novoAluno = await Aluno.create();
    res.json(novoAluno);
  }
}

export default new HomeController();
