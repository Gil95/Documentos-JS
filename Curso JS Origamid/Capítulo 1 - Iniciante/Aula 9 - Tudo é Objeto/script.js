var nome = 'Gilson';

var altura = 1.8;

function areaQuadrado(lado){
    return lado * lado;
}

var btn = document.querySelector('.btn')

var profissao = 'Estudante'
profissao.endsWith
profissao.length
profissao.slice

var btn = document.querySelector('.btn');
btn.addEventListener
btn.appendChild
btn.innerHTML
btn.id
btn.outerHTML

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

