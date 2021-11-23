const html = document.documentElement.className += 'js';

function initNavTab(){
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
};
initNavTab();

function initAccordionNav(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    // accordionList.forEach((item, index) => {
    //     if(index){
    //         item.nextElementSibling.classList.add('slide-up');
    //     };
    // });

    if(accordionList.length){
        function navAccordion(){
            this.classList.toggle(activeClass);

            // const ddClassList = this.nextElementSibling.classList;
            // const verificarAtivo = ddClassList.contains('ativo');
            // if(verificarAtivo) {
            //     setTimeout(() => {
            //         ddClassList.remove('ativo');
            //     }, 300);
            // }else {
            //     ddClassList.add('ativo');
            // }

            this.nextElementSibling.classList.toggle(activeClass);

            // this.nextElementSibling.classList.toggle('slide-up');

        };

        accordionList.forEach((item) => {
            item.addEventListener('click', navAccordion);
        });
    };
};
initAccordionNav();


const linksMenu = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollSuave(e){
    //e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    /*section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });*/
    
    // forma alternativa (não funciona)
    /* const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    }); */
    
};

linksMenu.forEach((link) => {
    link.addEventListener('click', scrollSuave);
});