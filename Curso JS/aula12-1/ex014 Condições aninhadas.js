var hr = new Date()
var mn = new Date()
var sc = new Date()
var hora = hr.getHours()
var minuto = mn.getMinutes()
var segundo = sc.getSeconds()

console.log (`Agora são exatamente ${hora}:${minuto}:${segundo}`)

if (hora < 6 ){
    console.log('Boa madrugada')}
else if (hora < 12 ){
    console.log('Bom dia')}
else if (hora < 18 ){
    console.log('Boa tarde')}
else{
    console.log('Boa noite')}