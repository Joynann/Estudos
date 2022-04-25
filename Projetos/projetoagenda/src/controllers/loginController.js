exports.index = (req, res) =>
{
    res.render('login', 
    {
        titulo: 'Login / Criar conta'
    });
}