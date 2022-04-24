exports.middlewareGlobal = (req, res, next) =>
{
    next();
}

exports.checkCsrfError = (err, req, res, next) =>
{
    if(err.code !== 'EBADCSRFTOKEN') next();
    
    return res.send('BAD CSRF ERROR!');
}

exports.csrfMiddleware = (req, res, next) =>
{
    res.locals.csrfToken = req.csrfToken();
    next();
}