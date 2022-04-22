exports.home = (req, res) => 
{
    res.render('index', 
    {
        titulo: 'Configurando Modelo Express'
    });
};

exports.homePost = (req, res) => res.send(req.body.nome);