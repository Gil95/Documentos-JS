var x = 5;
var y = 10;

//operadores de atribuição
//console.log(x += y) x = x+y
//console.log(x -= y) x = x-y
//console.log(x *= y) x = x*y
//console.log(x /= y) x = x/y
//console.log(x %= y) x = x%y
//console.log(x **= y) x = x**y

var numero = 20;
var numero2 = 10;

numero /= numero2;
console.log(numero);
console.log(numero2);

//Ternário
var idade = 20;
var possuiDiabetes = false;

var podeBeber;
podeBeber = idade >= 18 && !possuiDiabetes? 'Pode beber': 'Não pode beber';

console.log(podeBeber)

var possuiFaculdade = true;

if (possuiFaculdade)
    console.log('Sim, possui');
else
    console.log('Não possui');

//exercícios
var scroll = 1000;

scroll += 500;

console.log (scroll)

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa;

console.log (darCredito)