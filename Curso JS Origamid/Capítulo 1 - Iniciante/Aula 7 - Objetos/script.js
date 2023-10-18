var pessoa = {
    nome: 'Gilson',
    idade: 28,
    profissao: 'Estudante de Programação',
    possuiFaculdade: false,
}

console.log (pessoa.nome);
console.log (pessoa.profissao);

var quadrado = {
    lados: 4,
    
    area: function(lado){
        return lado*lado;
    },

    perimetro: function(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))