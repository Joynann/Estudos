// Duplique o menu e adicione ele em copy

const cloneMenu = document.querySelector('.menu').cloneNode(true);
const copy = document.querySelector('.copy');

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq

const primeiraDl = document.querySelector('.faq > dl > dt');

// Selecione o DD referente ao primeiro DT

const primeiroDd = primeiraDl.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
