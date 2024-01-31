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