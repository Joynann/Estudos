const Login = require('../models/LoginModel');

exports.index = (req, res) =>
{
    res.render('login', 
    {
        titulo: 'Login / Criar conta'
    });
}

exports.register = async function(req, res)
{
    try
    {
        const login = new Login(req.body);
        await login.register();

        if(login.errors.length)
        {
            req.flash('errors', login.errors);
            req.session.save(function()
            {
                return res.redirect('back');
            })
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function()
        {
            return res.redirect('back');
        })
        return;
    }
    catch(e)
    {
        console.log(e);
        return res.render('404',
        {
            titulo: 'Erro 404!'
        });
    }
}