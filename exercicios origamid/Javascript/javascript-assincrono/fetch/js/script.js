// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

function cep()
{
    const button = document.querySelector('[data-cep="submit"]');
    const resultado = document.querySelector('[data-cep="resultado"]');

    button.addEventListener('click', pesquisarCep);

    function pesquisarCep(e)
    {
        e.preventDefault();
        
        let numberCep = document.forms.cep.numberCep.value;
        numberCep = numberCep.replace('-', '').replace('.', '').trim();
    
        if(!isNaN(numberCep) && numberCep.length === 8)
        {
            fetch(`https://viacep.com.br/ws/${numberCep}/json/`)
            .then((r) =>
            {
                r.json()
                .then(r =>
                {
                    if(!r.erro)
                    {
                        resultado.innerText = `CEP informado: ${r.cep}\nCidade: ${r.localidade}\nEstado: ${r.uf}`;
    
                        resultado.classList.remove('red');
                    }
                    else
                    {
                        resultado.innerText = 'CEP informado não existe!'
                        resultado.classList.add('red');
                    }
                })
            })
        }
        else
        {
            resultado.innerText = 'Digite um cep válido';
            resultado.classList.add('red');
        }
    }
}
cep();

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

function bitcoinBr()
{
    atualizaBitcoin();
    setInterval(atualizaBitcoin, 30000);

    function atualizaBitcoin()
    {
        const bitSpan = document.querySelector('[data-bitcoin] > span');
        fetch('https://blockchain.info/ticker')
        .then(r =>
        {
            r.json()
            .then(r =>
            {
                let moeda = Number(r.BRL.buy);
                moeda = moeda.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
                bitSpan.innerText = `Bitcoin: ${moeda}`;
            })
        })
    }
}
bitcoinBr();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

function piada()
{
    const button = document.querySelector('[data-piada] button');
    button.addEventListener('click', pegarPiada);
    pegarPiada();

    function pegarPiada(e)
    {
        if(e)
        {
            e.preventDefault();
        }
        const piadaSpan = document.querySelector('[data-piada] > span');

        fetch('https://api.chucknorris.io/jokes/random')
        .then(r =>
        {
            r.json()
            .then(r =>
            {
                piadaSpan.innerText = r.value;
            })
        })
    }
}
piada();