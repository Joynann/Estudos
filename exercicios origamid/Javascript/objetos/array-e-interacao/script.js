// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const arrayCursos = Array.from(document.querySelectorAll('.curso'));
arrayCursos.forEach((item, index, array) => {
    array[index] = {
        titulo: item.children[0].innerHTML,
        descricao: item.children[1].innerHTML,
        aulas: item.children[2].innerHTML,
        horas: item.children[3].innerHTML,
    };
});
console.log(arrayCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const numerosMaior100 = numeros.filter(i => i > 100);
console.log(numerosMaior100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
console.log(instrumentos.some(i => i === 'Baixo'));


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const totalCompras = compras.reduce((i, x) => {
    const preco = +x.preco.replace('R$', '').trim().replace(',', '.');
    return i + preco;
}, 0);
console.log(totalCompras.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));