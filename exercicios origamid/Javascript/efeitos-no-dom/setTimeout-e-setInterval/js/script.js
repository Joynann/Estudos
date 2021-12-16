// Mude a cor da tela para azul e depois para vermelho a cada 2s.

/*const body = document.body;

function mudarCor()
{
    if(body.className === 'vermelho' || body.className == '')
    {
        body.className = 'azul';
    }
    else
    {
        body.className = 'vermelho';
    }
}

setInterval(mudarCor, 2000);*/

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciarBtn = document.querySelector('[data-cor="iniciar"');
const pausarBtn = document.querySelector('[data-cor="pausar"');
const screen = document.querySelector('[data-cor="screen"');
let contador = 0;
let intervalo;

function cronometro()
{
    screen.innerText = contador;
    contador++;
}

function ativarCronometro()
{
    intervalo = setInterval(cronometro, 300);
    iniciarBtn.setAttribute('disabled', '');
}

function pausarCronometro()
{
    clearInterval(intervalo);
    iniciarBtn.removeAttribute('disabled');
}

function resetarCronometro()
{
    screen.innerText = 0;
    contador = 0;
}

iniciarBtn.addEventListener('click', ativarCronometro);
pausarBtn.addEventListener('click', pausarCronometro);
pausarBtn.addEventListener('dblclick', resetarCronometro);