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