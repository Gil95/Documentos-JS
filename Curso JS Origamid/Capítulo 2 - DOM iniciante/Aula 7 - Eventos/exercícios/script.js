const linkInterno = document.querySelectorAll('a[href^="#"]');

function handleClick(event){
        event.preventDefault();
        document.body.classList.toggle('ativo');
};

linkInterno.addEventListener('click', handleClick);