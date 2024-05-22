const animais = document.getElementById('animais');
const contato = document.getElementsByClassName('grid-section contato');
const gridSection = document.getElementsByClassName('grid-section');
const ul = document.getElementsByTagName('ul');

const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkExterno = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

const primeiraLi = primeiroUl.querySelector('li');

console.log(animais);
console.log(contato);
console.log(gridSection[0]);
console.log(ul);
console.log(primeiraLi);
console.log(primeiroUl);

console.log(linkExterno);
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);


const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiroUl.classList.add('grid-section');

console.log(gridSectionHTML[0]);
console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item, index) {
    console.log(index);
});

const arrayGrid = Array.from(gridSectionHTML);