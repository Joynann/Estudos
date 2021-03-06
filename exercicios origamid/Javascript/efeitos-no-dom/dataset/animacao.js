const html = document.documentElement.className += 'js';

function initNavTab(){
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
initNavTab();

function initAccordionNav(){
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    accordionList.forEach((item, index) => {
        if(index){
            item.nextElementSibling.classList.add('slide-up');
        };
    });

    if(accordionList.length){
        function navAccordion(){
            this.classList.toggle(activeClass);

            const ddClassList = this.nextElementSibling.classList;
            const verificarAtivo = ddClassList.contains('ativo');
            if(verificarAtivo) {
                setTimeout(() => {
                    ddClassList.remove('ativo');
                }, 300);
            }else {
                ddClassList.add('ativo');
            }

            /*this.nextElementSibling.classList.toggle(activeClass);*/

            this.nextElementSibling.classList.toggle('slide-up');

        };

        accordionList.forEach((item) => {
            item.addEventListener('click', navAccordion);
        });
    };
};
initAccordionNav();

/*function initScrollSuave(){
    const linksMenu = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollSuave(e){
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
        // forma alternativa (n??o funciona)
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
        
    };

    linksMenu.forEach((link) => {
        link.addEventListener('click', scrollSuave);
    });
};
initScrollSuave();*/

function initAnimaScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if(sections.length) {
        function animaScroll() {
            sections.forEach(section => {
                const calculoTela = window.innerHeight * 0.6;
                const sectionTop = (section.getBoundingClientRect().top - calculoTela) < 0;
                if(sectionTop){
                    section.classList.add('ativo');
                }else {
                    section.classList.remove('ativo');
                }
            });
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
};
initAnimaScroll();