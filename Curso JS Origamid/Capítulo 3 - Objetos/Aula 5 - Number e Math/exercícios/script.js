//Retorne um número aleatório entre 1050 e 2000

console.log(Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050);

const numeros = ('4,5,20,27,9') ;
const arrayNumeros = numeros.split(',');
const numeroMaximo = Math.max(...arrayNumeros);

// Retorne o maior número da lista abaixo

console.log(numeroMaximo)

//Crie uma função para limpar os preços e retornar os números com centavos arredondados Depois retorne a soma total

const listaPrecos = ['R$59,99', 'R$ 100,222', 'R$230,00', 'r$ 200,00']
function limparPreco(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
    soma += limparPreco(preco);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));