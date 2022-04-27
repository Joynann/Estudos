const Login = require('../models/LoginModel');

exports.index = (req, res) =>
{
    if(req.session.user) return res.redirect('/');
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

exports.login = async function(req, res)
{
    try
    {
        // Declarando a classe
        const login = new Login(req.body);
        await login.login();

        // Em caso de erro
        if(login.errors.length)
        {
            req.flash('errors', login.errors);
            req.session.save(function()
            {
                return res.redirect('back');
            })
            return;
        }


        // Em caso de sucesso
        req.session.user = login.user;
        
        req.flash('success', 'Login efetuado com sucesso.');
        req.session.save(function()
        {
            return res.redirect('/');
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

exports.logout = (req, res) =>
{
    req.session.destroy();
    res.redirect('/');
}