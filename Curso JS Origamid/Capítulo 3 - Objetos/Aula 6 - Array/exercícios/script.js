const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// remova o primeiro valor de comidas e coloque em uma variável
const cloneComidas = comidas.slice(0,1);
console.log(cloneComidas);
//Remova o último valor de comidas e coloque em uma variável
const cloneComidas2 = comidas.slice(-1);
console.log(cloneComidas2);
//Adicione 'Arroz ao final da array
const comidasComArroz = comidas.concat('Arroz');
console.log(comidasComArroz);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

let html = `
            <section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contato</div>
            </section>`

//Substitua section por ul e div com li, utilizando split e join

html = html.split('section');
console.log(html);

html = html.join('ul');
console.log(html);

html = html.split('div');
console.log(html);

html = html.join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];