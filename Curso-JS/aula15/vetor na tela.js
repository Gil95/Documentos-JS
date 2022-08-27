let valores = [8,1,7,4,9,6,5,9,8,5,6,3,2]

for (let pos=0 ; pos < valores.length ; pos++ ) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(let pos in valores){
console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(valores.indexOf(5))