// const titulo = document.querySelector('h1');

// console.log(titulo.outerHTML);
// console.log(titulo.innerHTML);
// console.log(titulo.innerText);

// const animaisLista = document.querySelector('.animais-lista');

// console.log(animaisLista.outerHTML);
// console.log(animaisLista.innerHTML);
// console.log(animaisLista.innerText);

const h1 = document.querySelector('h1');
const animaisDescricao = document.querySelector('.animais-descricao');

console.log(h1.innerHTML);
console.log(h1.outerHTML);

h1.innerHTML = '<p>Novo Título</p>';

console.log(h1.innerHTML);
console.log(h1.outerHTML);

const lista = document.querySelector('.animais-lista');

console.log(lista.parentElement);
console.log(lista.parentElement.parentElement);
console.log(lista.previousElementSibling);
console.log(lista.nextElementSibling);

console.log(lista.children);
console.log(lista.children[0]);
console.log(lista.children[--lista.children.length]);

lista.querySelectorAll('li');
lista.querySelector('li:last-child');

//Element vs Node

console.log(lista.previousElementSibling); //elemento acima
console.log(lista.previousSibling); //node acima

console.log(lista.firstChild); //primeiro node child
console.log(lista.children); //todos os child
console.log(lista.childNodes); //todos os node child