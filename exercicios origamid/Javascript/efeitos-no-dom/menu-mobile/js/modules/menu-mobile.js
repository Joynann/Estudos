import initOutside from './click-outside.js';

export default function initMenuMobile()
{
    const body = document.documentElement;
    const button = document.querySelector('[data-menu="button"]');
    const list = document.querySelector('[data-menu="list"]');
    const eventos = ['click', 'touchstart'];
    let outside;
    
    if(button && list)
    {
        function menuMobile()
        {
            ativarMenuMobile(list);
            eventos.forEach(evento => 
            {
                body.addEventListener(evento, desativarMenuMobile);
            })
        }
        
        function ativarMenuMobile(list)
        {
            list.classList.add('active');
        }
        
        function desativarMenuMobile(e)
        {
            outside = initOutside(button, list, e.target);
            if(outside)
            {
                eventos.forEach(evento => 
                    {
                        body.removeEventListener(evento, desativarMenuMobile);
                    })
            }
        }
        
        button.addEventListener('click', menuMobile);
    }
}