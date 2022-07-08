import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class HomeController {
  async index(req, res) {
    const aluno = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['id', 'originalname'],
      },
    });
    res.json(aluno);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: 'Faltando id.' });

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['id', 'originalname'],
        },
      });

      if (!aluno) return res.status(400).json({ errors: 'Aluno não existe.' });

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: 'Faltando id.' });

      const aluno = await Aluno.findByPk(id);

      if (!aluno) return res.status(400).json({ errors: 'Aluno não existe.' });

      const novoAluno = await aluno.update(req.body);

      return res.json(novoAluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: 'Faltando id.' });

      const aluno = await Aluno.findByPk(id);

      if (!aluno) return res.status(400).json({ errors: 'Aluno não existe.' });

      aluno.destroy();

      return res.json({ success: 'Apagado com sucesso.' });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new HomeController();
