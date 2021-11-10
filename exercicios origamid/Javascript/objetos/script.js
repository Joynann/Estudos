// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: 'Joynan',
  sobrenome: 'Lagass Loose',
  idade: 22,
  sexo: 'Masculino',
  dataNascimento: '11/05/1999',
  mae: 'Jocelina Lagass',
  pai: 'Jocimar Loose',
}

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var labrador = {
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if(pessoa === 'homem') {
      return 'O labrador está latindo';
    } else {
      return 'O labrador não está latindo';
    }
  },
}