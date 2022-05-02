const validator = require('validator');

export default class Contato
{
    constructor(classForm)
    {
        this.form = document.querySelector(classForm);
    }

    init()
    {
        if(this.form) this.form.addEventListener('submit', this.handleEvent);
    }
    
    handleEvent(e)
    {
        e.preventDefault();
        const form = Contato.cleanUp(e.target);
        const erro = Contato.valida(form);
        if(erro) return;
        e.target.submit();
    }

    static cleanUp(form)
    {
        const cleanForm =
        {
            nome: form.nome,
            sobrenome: form.sobrenome,
            email: form.email,
            telefone: form.telefone
        }

        for(let key in cleanForm)
        {
            if(typeof(cleanForm[key].value) !== 'string')
            {
                cleanForm[key].value = '';
            }
        }

        return cleanForm;
    }

    static valida(form)
    {
        let erro = false;

        const msgAlert = document.querySelectorAll('.msgAlert');
        msgAlert.forEach(msg => msg.remove());

        if(!form.nome.value)
        {
            Contato.msgErro('* Este campo é obrigatório.', form.nome);
            erro = true;
        }
        if(form.email.value && !validator.isEmail(form.email.value))
        {
            Contato.msgErro('* E-mail inválido.', form.email);
            erro = true;
        }
        if(form.telefone.value && !validator.isMobilePhone(form.telefone.value))
        {
            Contato.msgErro('* Número de telefone inválido.', form.telefone);
            erro = true;
        }
        if(!form.email.value && !form.telefone.value)
        {
            Contato.msgErro('* Precisa ter um e-mail ou telefone.', form.telefone);
            erro = true;
        }

        return erro;
    }

    static msgErro(msg, e)
    {
        const erroEmail = document.createElement('p');
        erroEmail.classList.add('text-danger');
        erroEmail.classList.add('msgAlert');
        erroEmail.innerText = msg;
        e.insertAdjacentElement('afterend', erroEmail);
    }
}