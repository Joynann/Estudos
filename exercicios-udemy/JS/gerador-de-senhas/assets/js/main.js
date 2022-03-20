import GeraSenha from "./modules/geraSenha.js";

const novaSenha = new GeraSenha();

const buttonGerador = document.querySelector('.gerar-senha');
const showSenhaGerada = document.querySelector('.senha-gerada');

buttonGerador.addEventListener('click', () =>
{
    const qtd = document.querySelector('.qtd-caracteres').value;
    let chks = Array.from(document.querySelectorAll('[class^="chk-"]'));
    chks = chks.filter((chk) => {if(chk.checked) return chk;});

    for(let chk in chks)
    {
        chks[chk] = chks[chk].classList[0].replace('chk-', '');
    }

    showSenhaGerada.innerText = novaSenha.geraSenha(Number(qtd), chks);
});