const imgAnimais = document.querySelector('.animais-lista');

const onPageHeight = imgAnimais.clientHeight;
const withMarginHeight = imgAnimais.offsetHeight;
const totalHeight = imgAnimais.scrollHeight;

console.log(onPageHeight);
console.log(withMarginHeight);
console.log(totalHeight);

// também é possível com a largura (width)

const onPageWidth = imgAnimais.clientWidth;
const withMarginWidth = imgAnimais.offsetWidth;
const totalWidth = imgAnimais.scrollWidth;

console.log(onPageWidth);
console.log(withMarginWidth);
console.log(totalWidth);

//offsetTop  offsetLeft

const margemAcima = imgAnimais.offsetTop;
const margemEsquerda = imgAnimais.offsetLeft;

console.log(margemAcima);
console.log(margemEsquerda);

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft;

console.log(h2left);

const h2rect = primeiroh2.getBoundingClientRect();

console.log(h2rect);

if(h2rect.top<0){
    console.log('Passou do elemento');
}

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,

    window.pageYOffset,
    window.pageXOffset,
    //o valor de scroll foi atualizado o método, agora se usa o seguinte:
    window.scrollY,
    window.scrollX,
)

if (window.innerWidth < 600) {
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
};

const small = window.matchMedia('(max-width: 600px)');

if (small.matches) {
    console.log('Tela menor que 600px')
} else {
    console.log('Tela maior que 600px')
};