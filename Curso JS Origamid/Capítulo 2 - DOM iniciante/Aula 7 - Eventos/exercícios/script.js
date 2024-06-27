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

const elementos = document.querySelectorAll('body');