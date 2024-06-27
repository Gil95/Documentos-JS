const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
        event.preventDefault();
        console.log(event);
}

linksInternos.forEach((link) => {
        link.addEventListener('click', handleLink);
})