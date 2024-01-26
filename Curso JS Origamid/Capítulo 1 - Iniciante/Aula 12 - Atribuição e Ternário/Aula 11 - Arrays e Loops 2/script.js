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
var naoPossuiDiabetes = true;

var podeBeber;
podeBeber = idade >= 18 && naoPossuiDiabetes? true: false;

console.log(podeBeber)