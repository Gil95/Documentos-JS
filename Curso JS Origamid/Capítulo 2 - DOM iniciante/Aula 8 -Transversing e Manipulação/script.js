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