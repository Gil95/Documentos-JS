var videoGames = ['Switch', 'PS4' ,'XBOX', '3DS'];


videoGames.push ('PC Gamer');
videoGames.push ('Master System');
videoGames.push ('Game Cube');
videoGames.push ('Android');

for (let i = 0; i < videoGames.length; i++){
    console.log(videoGames[i]);
    if (videoGames[i] === 'Game Cube'){
        break;
    }
}

var frutas = ['Banana', 'Pera', 'Uva', 'Maçã', 'Ameixa', 'Manga'];

frutas.forEach(function(fruta, index){
    console.log(fruta, index);
})

var numero = 0;
var maximo = 50;
for(;numero < maximo;){
    console.log(numero);
    numero++;
}


//exercícios

var brasilCampeao = [1959, 1962, 1970, 1994, 2002]

for(let campeao = 0; campeao < brasilCampeao.length ; campeao++){
    console.log(`O Brasil ganhou a copa de ${brasilCampeao[campeao]}`);
}


for(let frutinhas = 0; frutinhas < frutas.length ; frutinhas++){
    console.log(frutas[frutinhas]);
    if (frutas[frutinhas] ===  'Uva'){
        break;
    }
}

var ultimaFruta = frutas[frutas.length - 1];