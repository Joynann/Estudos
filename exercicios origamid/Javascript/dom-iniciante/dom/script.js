// Retorne o url da página atual utilizando o objeto window

const href = document.location.href;
const phref = document.querySelector('.href');
phref.innerHTML = `URL da página carregado com JS: ${href}`;

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const primeiroElemento = document.querySelector('.ativo');
console.log(primeiroElemento);

// Retorne a linguagem do navegador

const linguagem = navigator.language;
console.log(linguagem);

// Retorne a largura da janela 

const larguraHTML = window.innerWidth;
console.log(`Largura da janela: ${larguraHTML}`);

const larguraBody = document.body.offsetWidth;
console.log(`Largura da tag body: ${larguraBody}`);