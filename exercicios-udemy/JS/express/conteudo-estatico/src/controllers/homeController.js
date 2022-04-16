exports.home = (req, res) => res.render('index');

exports.postHome = (req, res) =>
{
    res.send(`Nome: ${req.body.nome}`);
}