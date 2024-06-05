/* const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach(function(item, index, array){
    console.log(item, index, array);
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item, index, array){
    console.log(item, index, array);
});

imgs.forEach((item, index, array) => {
    console.log(item, index, array);
}); */

// Mostre no console cada parágrafo do site
const paragraf = document.querySelectorAll('p');

paragraf.forEach(item => console.log(item));

// Mostre o texto dos parágrafos no console
paragraf.forEach(item => console.log(item.innerText));
// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => console.log(i++));

imgs.forEach(() => i++);

console.log(i)