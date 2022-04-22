exports.middlewareGlobal = (req, res, next) =>
{
    console.log('Passei pelo middleware global!!!');
    next();
}