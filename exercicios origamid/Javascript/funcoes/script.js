// Crie uma função para verificar se um valor é Truthy

function verificar(trueOrFalse) {
  return !!trueOrFalse;
}
console.log(verificar('Verdadeiro'))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(tamanho) {
  return tamanho * 4;
}

console.log(perimetro(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(`Joynan`, `Lagass Loose`);

// Crie uma função que verifica se um número é par

function verificarPar(numero) {
  if(numero % 2 === 0) {
    return `É par`;
  } else {
    return `É impar`;
  }
}

console.log(verificarPar(357));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(tipo) {
  return typeof tipo;
}

console.log(tipoDado('53'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function meuNome(nomeComp) {
  console.log('Joynan Lagass Loose')
}

addEventListener('click', meuNome);

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
