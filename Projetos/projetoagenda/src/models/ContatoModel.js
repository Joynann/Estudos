const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        sobrenome: { type: String, required: false, default: '' },
        email: { type: String, required: false, default: '' },
        telefone: { type: String, required: false, default: '' },
        data: { type: Date, default: Date.now }
    }
);

const ContatoModel = mongoose.model('contato', ContatoSchema);

class Contato
{
    constructor(formContato)
    {
        this.body = formContato;
        this.contato = null;
        this.errors = [];
    }

    async registrar()
    {
        this.body = Contato.cleanUp(this.body);
        this.errors.push(...Contato.valida(this.body));

        if(this.errors.length) return;

        this.contato = await ContatoModel.create(this.body);
        console.log(this.contato);
    }

    async edit(id)
    {
        this.body = Contato.cleanUp(this.body);
        this.errors = Contato.valida(this.body);

        if(this.errors.length) return;

        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, {new: true});
    }

    static async verificaId(id)
    {
        if(typeof(id) !== 'string') return;
        const contato = await ContatoModel.findById(id);
        return contato;
    }

    static cleanUp(body)
    {
        const cleanBody =
        {
            nome: body.nome,
            sobrenome: body.sobrenome,
            email: body.email,
            telefone: body.telefone
        }
    
        for(const key in body)
        {
            if(typeof(body[key]) !== "string")
            {
                body[key] = '';
            }
        }

        return cleanBody;
    }

    static valida(body)
    {
        const errors = [];
        if(!body.nome) errors.push('Precisa ter nome!');
        if(!body.email && !body.telefone) errors.push('Precisa ter um e-mail ou telefone');
        if(body.email && !validator.isEmail(body.email)) errors.push('E-mail inválido!');
        if(body.telefone && !validator.isMobilePhone(body.telefone)) errors.push('Número de telefone inválido!');

        return errors;
    }
}

module.exports = Contato;