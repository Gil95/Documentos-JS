var nome = 'Gilson';
var idade = 28;
var time = null;
var simbolo = Symbol();
console.log(typeof nome, typeof idade, typeof time, typeof simbolo);

var sobrenome = 'Neto';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols +'gols';
console.log(typeof frase);

var ano = '2018';
var mes = 08;
console.log(ano + mes);

var frase1 = "Esse é o \"melhor\" jogo";
console.log(frase1);

var gols2 = 1000;
var frase2 = `Romário fez ${gols2*2} gols`;
console.log(frase2);

