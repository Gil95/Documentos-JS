const raposaImg = document.querySelector('img');

console.log(raposaImg.offsetTop);


function somaImagens(){
    const animaisImg = document.querySelectorAll('img');
    let soma = 0;
    animaisImg.forEach((imagem) => {
        soma += imagem.offsetWidth;
        console.log(imagem.offsetWidth);
    });
    console.log(soma);
}

window.onload = function(){
    somaImagens();
}

//esperando resolução
const linksSite = document.querySelectorAll('a');

linksSite.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
}
});

const small = window.matchMedia('(max-width: 720px)').matches;

const menu = document.querySelector('.menu');
if (small) {
    menu.className += ' menu-mobile';
} else {
    menu.className += ' menu-desktop';
}