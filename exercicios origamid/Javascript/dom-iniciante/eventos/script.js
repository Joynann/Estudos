// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInterno = document.querySelectorAll('[href^="#"]');

function classAtivo(e) {
    linkInterno.forEach((link, index, array) => {
    array[index].classList.remove('ativo');
    });
    e.target.classList.add('ativo');
    e.preventDefault();
}

linkInterno.forEach((link) => {
    link.addEventListener('click', classAtivo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const body = document.querySelector('body');

function elemento(e) {
    console.log(e.target);
};

body.addEventListener('click', elemento);

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// const body = document.querySelector('body');
// function elemento(e) {
//     e.target.remove();
// };
// body.addEventListener('click', elemento);

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function textoGrande(e) {
    if(e.key === 't' || e.key === 'T') {
        document.documentElement.classList.toggle('letra-grande');
    }
}

body.addEventListener('keypress', textoGrande);