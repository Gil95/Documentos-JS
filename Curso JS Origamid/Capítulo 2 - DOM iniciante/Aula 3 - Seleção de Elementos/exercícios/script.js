// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensNome = document.querySelectorAll('img[src^="../imagens/imagem"]');
console.log(imagensNome);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descrição
const primeiroH2Descricao = document.querySelector('.animais-descricao h2');
console.log(primeiroH2Descricao);

// Selecione o ultimo p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[-- paragrafos.length]);