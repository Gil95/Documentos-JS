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

// [].map()

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