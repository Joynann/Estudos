const links = document.querySelectorAll('a');
const content = document.querySelector('.content');

function handleLink(link)
{
    link.preventDefault();
    window.history.pushState(null, null, link.target.href);
    
    fetchPage(link.target.href);
}

async function fetchPage(link)
{
    content.innerText = 'Carregando';

    let newPage = await fetch(link);
    newPage = await newPage.text();

    mudarPagina(newPage, content);
}

function mudarPagina(newPage, content)
{
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newPage;

    content.innerHTML = newHtml.querySelector('.content').innerHTML;
    document.title = newHtml.querySelector('title').innerText;
}

links.forEach(link =>
{
    link.addEventListener('click', handleLink);
});

window.addEventListener('popstate', (e) =>
{
    fetchPage(window.location.href);
});