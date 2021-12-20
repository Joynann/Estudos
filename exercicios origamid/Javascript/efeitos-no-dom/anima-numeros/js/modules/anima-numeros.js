export default function initAnimaNumeros()
{
    const numeros = document.querySelectorAll('[data-numero]');
    
    if(numeros.length)
    {
        const numeroContainer = document.querySelector('[data-anime="scroll"].numeros');
        const ativo = numeroContainer.classList.contains('ativo');
        if(ativo && !numeroContainer.hasAttribute('data-numeros'))
        {
            numeros.forEach((numeroHTML) => {setNumeros(numeroHTML)});
            numeroContainer.setAttribute('data-numeros', '');
        }
        else if(!ativo)
        {
            numeroContainer.removeAttribute('data-numeros');
        }
    }
}

function setNumeros(numeroHTML)
{
    const numero = +numeroHTML.innerText;
    const acumulador = numero / 100;
    let soma = 0;

    const somaNumero = setInterval(() => 
    {
        if(soma < numero)
        {
            soma += acumulador;
            numeroHTML.innerText = Math.floor(soma);
        }
        else
        {
            numeroHTML.innerText = numero;
            clearInterval(somaNumero);
        }
    }, 0);
}