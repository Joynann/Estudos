// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector('img');
const distanciaTop = primeiraImg.offsetTop;
console.log(distanciaTop);

// Retorne a soma da largura de todas as imagens

function somarImagem() {
    const imagens = document.querySelectorAll('img');
    let somaLargura = 0;
    imagens.forEach((img) => {
        console.log(img.offsetWidth);
        somaLargura += img.offsetWidth;
    });
    console.log(somaLargura);
};

window.onload = function() {
    somarImagem();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const isMobile = window.matchMedia('(max-width: 720px)').matches;
if(isMobile){
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
        const linkWidth = link.offsetWidth;
        const linkHeight = link.offsetHeight;
        if(linkWidth >= 48 && linkHeight >= 48){
            console.log(link, 'Está de acordo com o padrão.');
        }else {
            console.log(link, 'Não está de acordo com o padrão.');
        }
    });
}

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

if(isMobile){
    const menu = document.querySelector('.menu');
    menu.classList.add('menu.mobile');
}