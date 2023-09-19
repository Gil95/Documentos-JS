function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(10));

function pi(){
    return 3.14;
}

var total = 5 * pi();

console.log(total);

function imc(peso, altura){
    const imc = peso / (altura**2);
    return imc;
}

console.log(imc (80,1.80));
console.log(imc(50,1.73));

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Você gosta do céu';
    } else if (cor === 'verde'){
        return 'Você gosta do mato';
    } else {
        return 'Você não gosta de nada';
    }
}

console.log(corFavorita('verde'))

function mostraConsole(){
    console.log('Oi')
}

addEventListener('click', mostraConsole);