const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const primeiroValorComidas = comidas.shift();
const ultimoValorComidas = comidas.pop();
comidas.splice(comidas.length, 0, 'Arroz');
comidas.splice(0, 0, 'Peixe', 'Batata');

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes
estudantes.sort();
estudantes.reverse();
const verificarEstudante = function(nome){
    return verificar = estudantes.includes(nome);
};
//console.log(verificarEstudante('Joana'), verificarEstudante('Juliana'));

let html = 
`<section>
    <div>Sobre</div>
    <div>Produtos</div>
    <div>Contato</div>
</section>`;
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section');
html = html.join('ul');
html = html.split('div');
html = html.join('li');

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carros2 = carros.slice();
carros.pop();