import initAnimaNumeros from './anima-numeros.js';

export default function initAnimaScroll()
{
    animaScroll();
    window.addEventListener('scroll', animaScroll);
};

function animaScroll()
{
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if(sections.length)
    {
        sections.forEach(section =>
        {
            const calculoTela = window.innerHeight * 0.6;
            const sectionTop = (section.getBoundingClientRect().top - calculoTela) < 0;
    
            if(sectionTop)
            {
                section.classList.add('ativo');
                initAnimaNumeros();
            }
            else
            {
                section.classList.remove('ativo');
            }
        });
    }
}