function Pessoa (nome, idade, nada, anda) {
    this.nome = nome;
    this.idade = idade;
    this.sabeNadar = nada;
    this.sabeAndar = anda;
}

var obj = {
    nome: 'Elizabeth',
    idade: 24
}

obj.sexo = 'Feminino'

Pessoa.prototype.andar = function() {
    if(this.sabeAndar == true) {
        return this.nome + ' andou';
    } else {
        return this.nome + ' caiu de cara no chão'
    }
}

const gilson = new Pessoa('Gilson', 29, true, true);
const lizie = new Pessoa('Elizabeth', 24, false, false);

Pessoa.prototype.nadar = function() {
    if(this.sabeNadar == true){
        return this.nome + ' nadou';
    } else {
        return this.nome + ' se afogou';
    }
}

const pais = 'Brasil';
const cidade = new String('Rio');

const lista = document.querySelectorAll('li');
const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']

const listaArray = Array.prototype.slice.call(lista);

const listaArray1 = Array.from(lista);

//dado.constructor.name , retorna o nome do construtor;

const Carro = {      //é um Object, mas o que importa é o que ele retorna
    marca: 'Ford',   //String
    preco: 2000,     //Number
    andar() {        //é uma Function, mas o que importa é o que ele retorna
        return true; //Boolean
    }
}