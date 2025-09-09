const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];


const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor:'Azul', preco: 2000}], function andar(nome) { console.log(nome)}];

dados[2]('Ford');
dados[1][2].cor;


const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[20] = 'Kia';

console.log(carros.length);


const li = document.querySelectorAll('li');

const arrayLi = Array.from(li)

const obj = {
    0: 'Gilson',
    1: 'Neto',
    4: 'Teste',
    length: 4,
}

const objArray = Array.from(obj);

console.log(li)

// Array.of() Array() e new Array()
Array.of(10);

Array.of(1,2,3,4);

new Array(5);

Array(5);

Array(1,2,3,4);

// [].length

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(frutas.length);

console.log(frutas[0].length);
console.log(frutas[1].length);
console.log(frutas[2].length);
console.log(frutas[2][0].length);

//Métodos Modificadores

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos2);
instrumentos2.sort();

const idades = [32,21,33,43,1,12,8];
idades.sort();

console.log(instrumentos2);
console.log(idades)

// .unshift() e .push()

const carros2 = ['Ford', 'Fiat', 'VW'];
console.log(carros2);

const novaArray = carros2.unshift('Honda', 'Kia');
console.log(novaArray);
console.log(carros2);

const novaArray2 = carros2.push('Ferrari', 'Toyota', 'Subaru');
console.log(novaArray2);
console.log(carros2);

//.shift() e .pop()

const primeiroCarro = carros2.shift();
console.log(primeiroCarro);
console.log(carros2);

const ultimoCarro = carros2.pop();
console.log(ultimoCarro);
console.log(carros2);

carros2.reverse();
console.log(carros2);

// .splice(index, remover, item1, item1, ...)

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros3.splice(1, 0, 'Kia', 'Mustang');
console.log(carros3);

carros3.splice(3, 2, 'Ferrari');
console.log(carros3);