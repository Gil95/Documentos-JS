function mostrarCarro(){
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro();

//escopo de pai
var carro1 = 'Etios';

function meuCarro(){
    var frase = `Meu carro é um ${carro1}`;
    console.log(frase);
}

meuCarro();
console.log(carro1);

//escopo de bloco
if(true){
    let carro2 = 'Pajero';
    console.log(carro2);
}

for(let i = 0; i < 10; i++){
    console.log(`Número ${i}`);
}

const semana = 'Sexta';
console.log(semana);

const data = {
    ano: 2018,
    mes:'Dezembro',
}

console.log(data);
console.log(data.mes);

data.dia = 29;

console.log(data);

var cor = 'preto';
const marca = 'Fiat';
let portas = 4;

console.log(/*var,*/ marca, portas);

const dois = 2;

function somarDois(x){
    return x + dois;
}

function dividirDois(x){
    return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(28));

const numero = 50;

for (let numero = 0; numero <10; numero++){
    console.log(numero);
}

const total = 10 * numero;
console.log(total);