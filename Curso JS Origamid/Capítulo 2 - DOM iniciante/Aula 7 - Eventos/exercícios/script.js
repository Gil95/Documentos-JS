const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
        linksInternos.forEach((link) => {
                link.classList.remove('ativo');
        });
        event.preventDefault();
        event.currentTarget.classList.add('ativo');

}

linksInternos.forEach((link) => {
        link.addEventListener('click', handleLink);
})

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
        console.log(event.currentTarget);
        //event.currentTarget.remove();
}

todosElementos.forEach((elemento) => {
        elemento.addEventListener('click', handleElemento);
})

function handleClickT(event) {
        if(event.key === 't'){
            document.documentElement.classList.toggle('textomaior');
        }
}

    window.addEventListener('keydown', handleClickT);