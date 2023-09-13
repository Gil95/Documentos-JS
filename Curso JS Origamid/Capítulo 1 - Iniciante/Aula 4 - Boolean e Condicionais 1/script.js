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