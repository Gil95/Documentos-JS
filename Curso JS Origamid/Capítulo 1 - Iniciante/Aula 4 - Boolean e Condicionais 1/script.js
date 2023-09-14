var possuiGraduacao = true;
var possuiDoutorado = true;

if (possuiDoutorado) {
    console.log('Possui graduação e doutorado');
} else if (possuiGraduacao) {
    console.log('Possui graduação mas não possui doutorado');
} else {
    console.log('Não possui graduação');
}

var nome = 'Gilson';

if (nome){
    console.log(nome)
} else {
    console.log('Nome não existe')
}

if (!possuiGraduacao){
    console.log('Não possui graduação')
}

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.');
        break;
    case 'Vermelho':
        console.log('Olhe para as rosas.')
        break;
    case 'Amarelo':
        console.log('Olhe para o sol.');
        break;
    case 'Verde':
        console.log('Olhe para a floresta');
        break;
    default:
        console.log('Feche os olhos.');
        break;
}

var minhaIdade = 28;
var idadeMinhaEsposa = 23;

if (minhaIdade > idadeMinhaEsposa) {
    console.log('É Maior');
} else if (minhaIdade ===idadeMinhaEsposa){
    console.log('É igual');
} else {
    console.log('É menor');
}

var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)

var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('É Maior');
} else if (brasil ===china){
    console.log('É igual');
} else {
    console.log('É menor');
}

if (('Gato' === 'gato') && ( 5 > 2 )) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}

if (('Gato' ==='gato') || (5 > 2)) {
    console.log('Gato' && 'Cão')    
} else {
    console.log('Falso')
}