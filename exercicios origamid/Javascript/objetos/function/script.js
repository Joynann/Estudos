// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const $ = document.querySelectorAll.bind(document);
const paragrafos = $('p');

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (a, i) => {
    i = i.innerHTML.split(' ').join('');
    console.log(i);
    return a += i.length;
}, 0);
console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

const novoElemento = function(tag, classe, conteudo){
    const element = document.createElement(tag);
    classe ? element.classList.add(classe) : null;
    conteudo ? element.innerHTML = conteudo : null;
    return element;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const novoh1 = novoElemento.bind(null, 'h1', 'titulo');

document.body.appendChild(novoh1('conteudo do h1'));