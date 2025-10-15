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

// .copyWithin(alvo, inicio, final)

const itens = ['item1', 'item2', 'item3', 'item4', 'item5'].copyWithin(2, 0, 3);
console.log(itens);

const itens2 = ['item1', 'item2', 'item3', 'item4', 'item5'].copyWithin(-1);
console.log(itens2);

// .fill(valor, inicio, final)

const itens3 = ['item1', 'item2', 'item3', 'item4'].fill('Banana');
console.log(itens3);

const itens4 = ['item1', 'item2', 'item3', 'item4'].fill('Banana', 2);
console.log(itens4);


const itens5 = ['item1', 'item2', 'item3', 'item4'].fill('Banana', 1, 3);
console.log(itens5);

// Métodos de acesso [].concat()

const transporte1 = ['Barco', 'Avião'];
console.log(transporte1);
const transporte2 = ['Carro', 'Moto'];
console.log(transporte2);

const transportes = transporte1.concat(transporte2);
console.log(transportes);

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
console.log(maisTransportes);

// .includes(), .indexOf() e .lastIndexOf()

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

console.log(linguagens.includes('css'));
console.log(linguagens.includes('ruby'));
console.log(linguagens.indexOf('python'));
console.log(linguagens.indexOf('js'));
console.log(linguagens.lastIndexOf('js'));
console.log(linguagens.indexOf('ruby'));

// .join(separador)

const linguagens2 = ['html', 'css', 'js', 'php', 'python'];

console.log(linguagens2.join());
console.log(linguagens2.join(''));
console.log(linguagens2.join(' '));
console.log(linguagens2.join(', '));
console.log(linguagens2.join('-_-'));

let htmlString = '<h2>Título Principal</h2>'
console.log(htmlString);

htmlString = htmlString.split('h2');
console.log(htmlString);

htmlString = htmlString.join('h1');
console.log(htmlString);

// .slice()

const linguagens3 = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens3);


console.log(linguagens3.slice(3));
console.log(linguagens3.slice(1, 4));

const cloneLinguagens = linguagens3.slice();
console.log(cloneLinguagens);

// .splice(index, remover, item1, item2, ...)

const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(carros4);

carros4.splice(1, 0, 'Kia', 'Mustang');
console.log(carros4);

carros4.splice(3, 2, 'Ferrari');
console.log(carros4);

const carros5 = ['Kia', 'Ferrari', 'Parati', 'Gol'];

console.log(carros5);

console.log(carros5.splice(2,0, 'Fusca','Uno'));

console.log(carros5);

// .copyWithin(alvo, inicio, final)

console.log(['Item1', 'Item2','Item3', 'Item4', 'Item5'].copyWithin(2,0,3));

console.log(['Item1', 'Item2','Item3', 'Item4'].copyWithin(-1));

// .fill(valor, inicio, final)

console.log(['Item1', 'Item2','Item3', 'Item4'].fill('Banana'));

console.log(['Item1', 'Item2','Item3', 'Item4'].fill('Banana', 2));

console.log(['Item1', 'Item2','Item3', 'Item4', 'Item5'].fill('Banana', 1, 3));

// Métodos de Acesso

// .concat()

