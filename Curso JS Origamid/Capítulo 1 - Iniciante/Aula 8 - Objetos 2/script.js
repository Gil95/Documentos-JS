var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight(){
        return this.height/2;
    }
}

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function(){
    console.log('Escondi')
}

var bg = menu.backgroundColor;

var estudante = {
    nome: 'Gilson',
    sobrenome: 'Neto',
    idade: 28,
    areaDeEstudo: 'Front-End',
}

console.log(estudante.nomeCompleto)
var carro = {
    preco: 32000,
    portas: 2,
    marca: 'Mitsubishi'
}

carro.preco = 35000;

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    if(viuHomem){
        console.log('latir')
    },
}