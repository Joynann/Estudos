export default function initNavTab(){
    const animaisLista = document.querySelectorAll('[data-anime="tabmenu"] img');
    const textoLista = document.querySelectorAll('[data-anime="tabcontent"] section');

    if(animaisLista.length && textoLista.length){
        textoLista[0].classList.add(textoLista[0].dataset.anime);
        textoLista[0].classList.add('ativo');
        function sectionAtivo(index){
            textoLista.forEach((texto) => {
                texto.classList.remove('ativo', texto.dataset.anime);
            })
            textoLista[index].classList.add('ativo', textoLista[index].dataset.anime);
        };

        animaisLista.forEach((animal, index) => {
            animal.addEventListener('click', () => {
                sectionAtivo(index);
            });
        });
    }
};