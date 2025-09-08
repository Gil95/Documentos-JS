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
instrumentos2.sort();
console.log(instrumentos2);