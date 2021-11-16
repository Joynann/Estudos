// Retorne no console todas as imagens do site

const imgs = document.querySelectorAll('img');
console.log(imgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagens = document.querySelectorAll('[src^="img/imagem"]');
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)

const href = document.querySelectorAll('[href^="#"]');
console.log(href);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site

const ultimoP = document.querySelectorAll('p');

console.log(ultimoP[--ultimoP.length]);

// ultimoP.forEach(function(item, index){
//     if(ultimoP.length - 1 === index) {
//         console.log(item.innerHTML);
//     }
// });
