import ValidaCpf from './validaCpf.js';

export default class ValidaForm
{
    valida()
    {
        const form = document.querySelector('form');
        form.addEventListener('submit', ValidaForm.handleValida);
    }

    static handleValida(e)
    {
        e.preventDefault();
        const formInput = document.querySelectorAll('.validar');

        const errorMsg = document.querySelectorAll('.error-text');
        for(const e of errorMsg)
        {
            e.remove();
        }

        let valid = [];
        formInput.forEach(campo =>
        {
            valid.push(ValidaForm.validaVazio(campo));

            if(campo.classList.contains('cpf'))
            {
                valid.push(ValidaForm.validaCpf(campo));
            }
            if(campo.classList.contains('usuario'))
            {
                valid.push(ValidaForm.validaUsuario(campo));
            }
            if(campo.classList.contains('senha'))
            {
                valid.push(ValidaForm.validaSenha(campo));
            }
            if(campo.classList.contains('repetir-senha'))
            {
                valid.push(ValidaForm.validaRepetirSenha(campo, formInput));
            }
        });
        valid = valid.find(v => v === false);
        if(valid !== undefined) 
        {
            console.log('formulário inválido.');
            return;
        };
        console.log('formulário válido.');
        return;
    }

    static validaVazio(campo)
    {
        if(campo.value !== '') return true;

        ValidaForm.errorMsg(campo, `O campo ${campo.previousElementSibling.innerText} não pode estar vazio.`);
        return false;
    }

    static validaCpf(campo)
    {
        const cpf = new ValidaCpf(campo.value);
        if(cpf.cpfIsValid) return true;

        ValidaForm.errorMsg(campo, `CPF inválido.`);
        return false;
    }

    static validaUsuario(campo)
    {
        let valid = true;

        if(campo.value.length < 3 || campo.value.length > 12)
        {
            ValidaForm.errorMsg(campo, `O campo Usuário deve conter de 3 a 12 caracteres.`);
            valid = false;
        }
        if(!campo.value.match(/^[a-zA-Z0-9]+$/g))
        {
            ValidaForm.errorMsg(campo, `O campo Usuário deve conter apenas letras ou números.`);
            valid = false;
        }

        return valid;
    }

    static validaSenha(campo)
    {
        if(campo.value.length < 6 || campo.value.length > 12)
        {
            ValidaForm.errorMsg(campo, `O campo Senha deve conter de 6 a 12 caracteres`);
            return false;
        }

        return true;
    }

    static validaRepetirSenha(campo, formInput)
    {
        let senha = Array.from(formInput);
        senha = senha.filter(v => {return v.classList.contains('senha')})[0];

        if(campo.value !== senha.value)
        {
            ValidaForm.errorMsg(campo, `O campo Repetir Senha deve ser igual a Senha.`);
            return false;
        }
        return true;
    }

    static errorMsg(campo, msg)
    {
        const divError = document.createElement('div');
        divError.innerText = msg;
        divError.classList = 'error-text';
        campo.insertAdjacentElement('afterend', divError);
    }

}

/*

classe

valida
listener > submit > para cada evento > handleValida

handleValida(e)
preventDefault ok
remover msgs de erro ok
valid = true ok
validaVazio = false > valid = false; ok
valid = false > (msg de erro)
allTrue > (envia)

(valida vazio)
para cada um varificar se está vazio

(validaCpf)
classe valida Cpf

(validaUsuario)
3 a 12 caracteres
somente letras ou números

(validaSenha)
6 a 12 caracteres
senha e repetir senha devem ser iguais

(criaErro(campo, msg))

*/