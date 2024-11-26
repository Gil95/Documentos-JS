const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String('2018');

console.log(liquido.length);

const frase = 'A melhor comida';

console.log(frase.length);

console.log(comida[0]);
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
console.log(fruta.includes(listaFrutas));
