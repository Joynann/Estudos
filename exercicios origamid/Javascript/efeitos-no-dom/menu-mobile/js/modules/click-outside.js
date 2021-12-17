export default function initOutside(button, list, e)
{
    const body = document.documentElement;
    const verificar = verificarElemento(list, e);

    if(!verificar && button.classList.contains('active'))
    {
        button.classList.remove('active');
        list.classList.remove('active');
        return true;
    }
    else
    {
        button.classList.add('active');
        return false;
    }
}

function verificarElemento(list, e)
{
    while(e != null)
    {
        if(e == list)
        {
            e = true;
            break;
        }
        else
        {
            e = e.parentElement;
        }
    }
    
    return e;
}