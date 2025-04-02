const ano = 2025;
const preco = new Number(99);

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(4+5));
console.log(Number.isNaN('Olá, Mundo!'));
console.log(Number.isInteger(20));
console.log(Number.isInteger(23.6));

console.log(parseFloat('99.50'));
console.log(Number.parseFloat('99,50'));
console.log(Number.parseFloat('100 Reais'));
console.log(Number.parseFloat('R$100,00'));

console.log(parseInt('99,50'));
console.log(parseInt(5.434343555555, 10));
console.log(Number.parseInt('100 Reais'));

const preco2 = 2.99;
console.log(preco.toFixed());
const carro = 1000.455;
console.log(carro.toFixed(2));
const preco3 = 1499.49;
console.log(preco3.toFixed());

const gasAdit = 6.499;
const tanque = 55.3001;
const abastec = gasAdit*tanque;
console.log(abastec, +abastec.toFixed(2));

const preco4 = [255, 0, 255];
const hexArray = preco4.map(valor => valor.toString(16).padStart(2, '0'));
console.log(hexArray);

const hexString = hexArray.join('');
console.log(hexString);