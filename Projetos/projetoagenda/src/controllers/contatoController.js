const Contato = require('../models/ContatoModel');

exports.index = (req, res) =>
{
    res.render('contato',
    {
        titulo: 'Contato',
        contato: {}
    });
}

exports.register = async (req, res) =>
{
    try
    {
        const contato = new Contato(req.body);
        await contato.registrar();
        if(contato.errors.length)
        {
            req.flash('errors', contato.errors);
            req.session.save(() =>
            {
                return res.redirect('back');
            })
            return;
        }
        req.flash('success', 'Contato cadastrado com sucesso.');
        req.session.save(() =>
        {
            return res.redirect(`/contato/editar/${contato.contato._id}`);
        })
        return;
    }
    catch(e)
    {
        console.log(e);
        res.render('404', 
        {
            titulo: 'Erro 404!'
        })
    }
}

exports.editar = async (req, res) =>
{
    if(!req.params.id) return res.render('404', {titulo:'Erro 404!'});
    const contato = await Contato.verificaId(req.params.id);
    res.render('contato',
    {
        titulo: 'Contato',
        contato
    })
}

exports.edit = async (req, res) =>
{
    try
    {
        if(!req.params.id) return res.render('404', {titulo:'Erro 404!'});
        const contato = new Contato(req.body);
        await contato.edit(req.params.id);
        if(contato.errors.length)
        {
            req.flash('errors', contato.errors);
            req.session.save(() =>
            {
                return res.redirect('back');
            })
            return;
        }
        req.flash('success', 'Contato editado com sucesso.');
        req.session.save(() =>
        {
            return res.redirect(`/contato/editar/${contato.contato._id}`);
        })
        return;
    }
    catch(e)
    {
        console.log(e);
        res.render('404', 
        {
            titulo: 'Erro 404!'
        })
    }
}

exports.delete = async (req, res) =>
{
    try
    {
        if(!req.params.id) return res.render('404', {titulo:'Erro 404!'});
        const contato = await Contato.deletaContato(req.params.id);
        if(!contato) return res.render('404', {titulo:'Erro 404!'});
        req.flash('success', 'Contato apagado com sucesso.');
        req.session.save(() =>
        {
            return res.redirect('back');
        })
        return;
    }
    catch(e)
    {
        console.log(e);
        res.render('404', 
        {
            titulo: 'Erro 404!'
        })
    }
}