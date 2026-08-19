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
// [].forEach() altera a array e pode adicionar valores e classes à array existente.
// [].map() já faz um pouco diferente, este cria uma nova array.

const numeros3 = [2, 4, 5, 6, 8, 10, 12, 14];


const numerosX4 = numeros3.map(n => n * 4);

console.log(numerosX4); // [8, 16, 20, 24, 32, 40, 48, 56];

// Exemplo de uso de [].map()
// Neste caso, o .map foi utilizado para criar uma nova array com alguns dos dados de outra array anterior.

const aulas = [
    {
        nome:'HTML 1',
        min: 15 
    },
    {
        nome:'HTML 2',
        min: 10 
    },
    {
        nome:'CSS 1',
        min: 20 
    },
    {
        nome:'JS 1',
        min: 25 
    },
]

const tempoAulas = aulas.map(aula=> aula.min);
function nomeAulas(aula) {
    return aula.nome;
}
const arrayNomeAulas = aulas.map(nomeAulas);

console.log(tempoAulas,arrayNomeAulas);

// [].reduce()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial)

// executa a função de callback para cada item da Aray. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, item, index, array) => {
    console.log(acumulador, item, index);
    return acumulador + item;
}, 0);

// No caso do total1, não teve valor inicial definido, ou seja, começou como o valor 0.

console.log(total1);

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);

// No caso do total2, foi definido um valor inicial de 100.

console.log(total2);

// Maior Valor com [].reduce()

const numeros4 = [10, 25, 60, 5, 35, 10];

const maiorNumero = numeros4.reduce((anterior, atual) => {
    return anterior < atual ? atual : anterior;
});

console.log(maiorNumero);

const numeros5 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero2 = numeros5.reduce((anterior, atual) => {
    if (anterior > atual)
        return anterior
    else
        return atual
});

console.log(maiorNumero2);

const maiorNumero3 = numeros5.reduce((anterior, atual) => anterior > atual ? anterior : atual, 0);

console.log(maiorNumero3);

const aulas3 = [
    {
        nome: 'HTML 1',
        min: 15
    },
    {
        nome: 'HTML 2',
        min: 10
    },
    {
        nome: 'CSS 1',
        min: 20
    },
    {
        nome: 'JS 1',
        min: 25
    },
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    return acumulador;
}, {});

console.log (listaAulas);

// .reduceRight()

// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esqueda para a direita.

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutas2 = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

console.log(frutasRight);
console.log(frutas2);

// .some()

// Se pelo menos um return da iteração for truthy, ele retorna true.

const frutas3 = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas.some((fruta) => {
    return fruta === 'Uva';
})

console.log(temUva);

function maiorQue100(numero) {
    return numero > 100;
}

const numeros6 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros6.some(maiorQue100);

console.log(temMaior);

function menorQue0(numero) {
    return numero < 0;
}

const temMenor = numeros6.some(menorQue0);

console.log(temMenor);

const numeros7 = [0, 15, 20, 39, -5]
const temMenor2 = numeros7.some(menorQue0)

console.log(temMenor2);