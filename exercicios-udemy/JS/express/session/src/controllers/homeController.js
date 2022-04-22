exports.home = (req, res) => 
{
    console.log(req.session.usuario);
    res.render('index');
};