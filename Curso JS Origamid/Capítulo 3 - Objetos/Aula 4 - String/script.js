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

const linguagem = 'Javascript';

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

