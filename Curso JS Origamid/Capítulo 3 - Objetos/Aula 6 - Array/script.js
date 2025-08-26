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


let li = document.querySelectorAll('li');

li = Array.from(li);

const carros2 = {
    0: 'Fiat',
    1: 'Honda',
    2: 'Ford',
    length: 4,
}

const carrosArray = Array.from(carros2);