const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String('2018');

console.log(liquido.length);

const frase = 'A melhor comida';

console.log(frase.length);

console.log(comida[0]);
console.log(frase[0])
console.log(frase[frase.length - 1])
console.log(frase.charAt(frase.length - 1 ))

const linguagem = 'JavaScript';

console.log(linguagem.charAt(0));
console.log(linguagem.charAt(2));
console.log(linguagem.charAt(linguagem.length - 1));

const fraseJ = 'A melhor linguagem é ';
const fraseFinal = fraseJ.concat(linguagem, '!!');
console.log(fraseFinal);

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(listaFrutas.includes(fruta));
console.log(listaFrutas.includes(fruta, 14));
console.log(fruta.includes(listaFrutas));

console.log(fruta.endsWith('nana'));
console.log(fruta.startsWith('Ba'));
console.log(fruta.startsWith('na'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0,3));
console.log(transacao2.slice(0,3));
console.log(transacao3.slice(0,3));

console.log(transacao1.slice(12));
console.log(transacao1.slice(-4));
console.log(transacao1.slice(3, 6));

console.log(fruta.slice(-3));

console.log(linguagem.substring(3,5));
console.log(linguagem.substring(0,4));
console.log(linguagem.substring(4));
console.log(linguagem.substring(-3)); //Não funciona valores negativos

const instrumento = 'Guitarra';
console.log(instrumento.indexOf('r'));
console.log(instrumento.lastIndexOf('r'));
console.log(instrumento.indexOf('ta'));

const listaPrecos = ['R$99,00', 'R$199,00', 'R$12000,00'];

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'));
});

console.log(listaPrecos[0].padStart(10, '.'));
console.log(listaPrecos[0].padEnd(10, '.'));

const fraseR = 'Ta'

console.log(fraseR.repeat(5));
console.log(instrumento.repeat(3));
console.log(listaPrecos[1].repeat(3));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
let preco = 'R$1200,43';
preco = preco.replace(',', '.');

console.log(listaItens);
console.log(preco);