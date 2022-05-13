import Aluno from '../models/Aluno';
import database from '../config/database';

class HomeController {
  async index(req, res) {
    await database.sync();
    const novoAluno = await Aluno.create({
      nome: 'Jocelina',
      sobrenome: 'Lagass',
      email: 'jocelina@gmail.com',
      idade: 47,
      peso: 88.3,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
