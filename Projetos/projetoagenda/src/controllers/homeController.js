exports.index = (req, res) => 
{
    res.render('index', 
    {
        titulo: 'Página principal'
    });
}