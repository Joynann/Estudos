export default function initNavAccordion(){
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