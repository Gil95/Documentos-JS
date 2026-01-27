const carros = ['Ford','Fiat','Honda'];
    carros.forEach(function(item, index, array){
        console.log(item.toUpperCase());    
    });

// com Arrow Function

carros.forEach((item, index, array) => {
    console.log(item.toUpperCase());
});

const carros2 = ['Ford', 'Fiat', 'Honda']
carros2.forEach((item, index, array) => {
    array[index] = item.toUpperCase();
});
console.log(carros2);

// Arrow Function

const li = document.querySelectorAll('li');

li.forEach((i,index) => i.classList.add('ativa' + index));

li.forEach(function(item, index){
    item.classList.add('ativa' + index);
});

// Modificar a Array Original

const carros3 = ['Ford', 'Fiat', 'Honda'];
carros3.forEach((item, index, array) => {
    array[index] = 'Carro ' + item;
});
console.log(carros3);

// [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração

const carros4 = ['Ford', 'Fiat', 'Honda'];

const newCarros = carros4.map((item) => {
    return 'Carro '+ item;
});

console.log(carros4, newCarros);

const retornoForeach = li.forEach((item, index) => {
    item.classList.add('ativa' + index)
});

console.log(retornoForeach);
console.log(li);

const novaArray = carros4.map((item, index, array) => {
    return item.toUpperCase(); //Funções não dão retorno, apenas mudam as variáveis, caso queira um return, deve exigir um return para a mesma.
});

console.log(novaArray, carros4);

const numeros = [2, 4, 5, 6, 78];


const numerosX2 = numeros.map(n => n * 2);

console.log(numerosX2);

// Valor Retornado
//Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.

const carros5 = ['Ford', 'Fiat', 'Honda'];
const newCarros2 = carros.map((item) => {
    const novoValor = 'Carro ' + item;
});

console.log(newCarros2); // [undefined, undefined, undefined];

// Arros Function e [].map()
// Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>

const numeros2 = [2, 4, 5, 6, 8, 10, 12, 14];

const numerosX3 = numeros2.map(n => n * 3); //Arrow function sem chaves, indica que o resultado do código é o retorno.

console.log(numerosX3); // [6, 12, 15, 18, 24, 30, 36, 42];


// [].map() vs [].forEach()
// Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.

const numeros4 = [2, 4, 5, 6, 8, 10, 12, 14];


const numerosX4 = numeros4.map(n => n * 4);

console.log(numerosX4); // [8, 16, 20, 24, 32, 40, 48, 56];