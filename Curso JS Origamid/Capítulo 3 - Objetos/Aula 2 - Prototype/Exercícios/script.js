/* Crie uma função construtora de Pessoas
Deve conter:
Nome,
Sobrenome,
Idade.
Crie um método no protótipo que retorne o nome completo da pessoa*/

function Pessoa (nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}
const gilson = new Pessoa('Gilson', 'Gomes' , 29);

/* Liste os métodos acessados por dados criados com:

NodeList,       
HTMLCollection,
Document */

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

// Liste os Construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerHTML;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qaul o contrutor do dado abaixo:
li.hidden.constructor.name;
