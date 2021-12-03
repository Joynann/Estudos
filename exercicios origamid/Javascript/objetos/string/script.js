// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let taxaTotal = 0;
  let recebimentoTotal = 0;
  transacoes.forEach((item, index) => {
    item.valor = +item.valor.replace('R$ ', '');
    if(item.descricao.slice(0, 4) === 'Taxa'){
        taxaTotal += item.valor;
    } else {
        recebimentoTotal += item.valor;
    }

  });

  console.log(taxaTotal, recebimentoTotal);

  // Retorne uma array com a lista abaixo

  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const arrayTransportes = transportes.split(';');
  console.log(arrayTransportes);
  
  // Substitua todos os span's por a's
  let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

    html = html.split('span');
    html = html.join('a');
    console.log(html);
  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  console.log(frase[--frase.length]);
  
  // Retorne o total de taxas
  const arrayTaxaTransacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

  let totalDeTaxas = 0;
  arrayTaxaTransacoes.forEach(item => {
      item = item.toLowerCase().trim();
      if(item.slice(0, 4) === 'taxa'){
          totalDeTaxas++;
      }
  })
console.log(totalDeTaxas);