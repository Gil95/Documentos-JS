function imc(peso, altura){
    const imc = peso / (altura**2);
    console.log(imc);
}

imc (80, 1.80);
console.log(imc(59, 1.80))

function terceiraIdade(idade){
    if(typeof idade !== 'number'){
        return 'Informe a sua idade!';
    } else if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log (terceiraIdade(28));

var totalPaises = 193;

function faltaVisitar(paisesVisitados){
    return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(35));


var profissao = 'Gerente';

function dados(){
    var nome = 'Gilson';
    var idade = '27';
    function outrosDados(){
        var endereco = 'Rio de Janeiro';
        var idade = '28';
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados());