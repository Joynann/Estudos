export default function initAnimaScroll(){
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