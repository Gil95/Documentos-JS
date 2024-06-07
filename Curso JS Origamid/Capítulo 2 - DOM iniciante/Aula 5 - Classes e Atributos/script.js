const menu = document.querySelector('.menu');

menu.className; //string
menu.classList; //lista de classes
menu.classList.add('ativo', 'azul');
menu.classList.add('ativo', 'mobile'); //duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); //adiciona / remove a classe
menu.classList.contains('ativo'); //true ou false
menu.classList.replace('ativo', 'inativo');

console.log(menu.classList.contains('ativo'));

if(menu.classList.contains('azul')){
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho';

console.log(menu.className);

const animais = document.querySelector('.animais');

console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

console.log(img.getAttribute('src'));

console.log(img.setAttribute('alt', 'Texto Alternativo'));

console.log(img.hasAttribute('id'));

console.log(img.getAttribute('alt'));

img.removeAttribute('alt');

img.hasAttributes();

console.log(img.getAttribute('alt'));