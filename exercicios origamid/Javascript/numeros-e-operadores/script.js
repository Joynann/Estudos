// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// total = 35
console.log(total);

// Crie duas expressões que retornem NaN
var NaN1 = 'NaN 1' - 1;
var NaN2 = 'NaN 2' - 2;
console.log(`${NaN1}, ${NaN2}`);

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(x++);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2 + unidade; // NaN (Not a Number)
console.log(`peso = ${peso} \npeso divido por dois: ${pesoPorDois}`);