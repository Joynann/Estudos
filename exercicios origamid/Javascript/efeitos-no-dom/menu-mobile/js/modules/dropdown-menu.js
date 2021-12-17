export default function initDropDownMenu()
{
    const dropDownLink = document.querySelectorAll('[data-dropdown] > a');
    const eventos = ['click', 'touchstart'];

    if(dropDownLink)
    {
        dropDownLink.forEach(ddlink => 
        {
            eventos.forEach(evento => 
            {
                ddlink.addEventListener(evento, dropDownMenu);
            })
        })
        
        function dropDownMenu(ddlink)
        {
            ddlink.preventDefault();
            const ddli = ddlink.target.parentElement;
        
            ativarDropDownMenu(ddli);
        
            desativarDropDownMenu.ddli = ddli;
            desativarDropDownMenu.ddlink = ddlink.target;
            desativarDropDownMenu.dd = ddlink.target.nextElementSibling;
            
            eventos.forEach(evento => 
            {
                document.documentElement.addEventListener(evento, desativarDropDownMenu);
            })
        }
        
        function ativarDropDownMenu(ddli)
        {
            ddli.classList.add('active');
        }
        
        const desativarDropDownMenu =
        {
            handleEvent(html)
            {
                const outside = 'data-outside';
        
                if(html.target != this.dd && this.ddlink.hasAttribute(outside))
                {
                    this.ddli.classList.remove('active');
                    this.ddlink.removeAttribute(outside);
        
                    eventos.forEach(evento => 
                    {
                        document.documentElement.removeEventListener(evento, desativarDropDownMenu);
                    })
                    return;
                }
                this.ddlink.setAttribute(outside, '');
            }
        }
    }
}