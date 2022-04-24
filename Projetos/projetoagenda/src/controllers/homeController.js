exports.home = (req, res) => 
{
    res.render('index', 
    {
        titulo: 'Título'
    });
};

exports.homePost = (req, res) => res.send(req.body.nome);