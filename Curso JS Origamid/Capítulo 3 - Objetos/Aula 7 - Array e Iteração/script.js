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
    console.log(item.toUpperCase(), index, array);
});

// Arrow Function

const li = document.querySelectorAll('li');

li.forEach((i,index) => i.classList.add('ativa' + index));

li.forEach(function(item, index){
    item.classList.add('ativa' + index);
});

