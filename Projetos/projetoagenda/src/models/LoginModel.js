const req = require('express/lib/request');
const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true }
    }
);

const LoginModel = mongoose.model('Login', LoginSchema);

class Login
{
    constructor(body)
    {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register()
    {
        this.cleanUp();
        this.valida();
        if(this.errors.length) return;

        try
        {
            this.user = await LoginModel.create(this.body);
        }
        catch(e)
        {
            console.log(e);
        }
    }

    cleanUp()
    {
        this.body =
        {
            email: this.body.email,
            password: this.body.password
        }

        for(const key in this.body)
        {
            if(typeof(this.body[key]) !== "string")
            {
                this.body[key] = '';
            }
        }
    }

    valida()
    {
        if(!validator.isEmail(this.body.email)) 
        {
            this.errors[this.errors.length] = 'E-mail inválido.';
        }
        if(this.body.password.length < 3 || this.body.password.length > 50)
        {
            this.errors[this.errors.length] = 'A senha precisa conter de 3 a 50 caracteres.';
        }
    }
}

module.exports = Login;