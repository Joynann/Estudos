exports.middlewareGlobal = (req, res, next) =>
{
    next();
}

exports.checkCsrfError = (err, req, res, next) =>
{
    if(err.code !== 'EBADCSRFTOKEN') next();
    
    return res.render('404',
    {
        titulo: 'Erro 404!'
    });
}

exports.csrfMiddleware = (req, res, next) =>
{
    res.locals.csrfToken = req.csrfToken();
    next();
}