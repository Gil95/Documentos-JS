const href = window.location.href;

console.log(href);

if(href === 'http://127.0.0.1:5501/Curso%20JS%20Origamid/Cap%C3%ADtulo%202%20-%20DOM%20iniciante/Aula%201%20-%20O%20que%20%C3%A9%20o%20DOM/Index.html') {
    console.log('É igual');
}

const elementoAtivo = document.querySelectorAll('.ativo')

const linguagem = window.navigator.language;
console.log(linguagem);

if(linguagem == 'pt-BR'){
    document.body.style.backgroundColor = "red";
}

const windowWidth = window.innerWidth;
console.log(windowWidth);