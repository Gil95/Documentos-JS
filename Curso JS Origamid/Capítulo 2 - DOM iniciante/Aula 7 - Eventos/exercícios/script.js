const linkInterno = document.querySelector('a[href^="#"]');

function handleClick(event) {
    if(event.key === 'f')
        document.body.classList.toggle('fullscreen');
    else if (event.key === 'v'){
        document.body.classList.toggle('vermelho');
        document.body.classList.remove('azul');}
    else if (event.key === 'a'){
        document.body.classList.toggle('azul');
        document.body.classList.remove('vermelho');}
}

linkInterno.addEventListener('click', handleClick);