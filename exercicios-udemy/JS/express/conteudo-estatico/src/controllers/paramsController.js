exports.parametros = (req, res) =>
{
    if(req.params.parametro)
    {
        res.send(`${req.params.parametro} <br> ${req.query.teste}`);
        return;
    }
    
    res.send('Não foi enviado uma resquisição');
}