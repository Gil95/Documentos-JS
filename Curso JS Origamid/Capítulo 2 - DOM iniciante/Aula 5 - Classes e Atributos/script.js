const menu = document.querySelector('.menu');

menu.className; //string
menu.classList; //lista de classes
menu.classList.add('ativo', 'azul');
menu.classList.add('ativo', 'mobile'); //duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); //adiciona / remove a classe
menu.classList.contains('ativo'); //true ou false
menu.classList.replace('ativo', 'inativo');

console.log(menu.classList.contains('ativo'));