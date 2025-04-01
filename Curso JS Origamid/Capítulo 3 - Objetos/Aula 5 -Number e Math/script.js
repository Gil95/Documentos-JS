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