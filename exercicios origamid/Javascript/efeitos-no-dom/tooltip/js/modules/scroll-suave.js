/*export default function initScrollSuave(){
    const linksMenu = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollSuave(e){
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
        // forma alternativa
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
        
    };

    linksMenu.forEach((link) => {
        link.addEventListener('click', scrollSuave);
    });
};*/