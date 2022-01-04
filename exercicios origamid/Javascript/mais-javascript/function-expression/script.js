// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

const teste = 'teste1';

(function()
{
    const teste = 'teste2';
    console.log(teste);
})();

console.log(teste);

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

const functionTeste = () => console.log('teste3');
active(functionTeste);