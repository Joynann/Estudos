const html = document.documentElement.className += 'js';
const animaisLista = document.querySelectorAll('.js-tabmenu img');
const textoLista = document.querySelectorAll('.js-tabcontent section');

if(animaisLista.length && textoLista.length){
    textoLista[0].classList.add('ativo');
    function sectionAtivo(index){
        textoLista.forEach((texto) => {
            texto.classList.remove('ativo');
        })
        textoLista[index].classList.add('ativo');
    };

    animaisLista.forEach((animal, index) => {
        animal.addEventListener('click', () => {
            sectionAtivo(index);
        });
    });
}