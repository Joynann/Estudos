const validator = require('validator');

export default class Login
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
        const form = Login.cleanUp(e.target);
        const erro = Login.valida(form);
        if(erro) return;
        e.target.submit();
    }

    static cleanUp(form)
    {
        const cleanForm =
        {
            email: form.email,
            password: form.password
        }

        if(typeof(cleanForm.email.value) !== 'string') cleanForm.email.value = '';
        if(typeof(cleanForm.password.value) !== 'string') cleanForm.password.value = '';

        return cleanForm;
    }

    static valida(form)
    {
        let erro = false;

        const msgAlert = document.querySelectorAll('.msgAlert');
        msgAlert.forEach(msg => msg.remove());

        if(!validator.isEmail(form.email.value))
        {
            Login.msgErro('* E-mail inválido.', form.email);
            erro = true;
        }
        if(form.password.value.length < 3 || form.password.value.length > 50)
        {
            Login.msgErro('* A senha precisa conter de 3 a 50 caracteres.', form.password);
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