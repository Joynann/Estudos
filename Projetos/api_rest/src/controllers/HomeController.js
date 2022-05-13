import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Joynan',
      sobrenome: 'Lagass Loose',
      email: 'joynan112@gmail.com',
      idade: 23,
      peso: 77.5,
      altura: 1.82,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
