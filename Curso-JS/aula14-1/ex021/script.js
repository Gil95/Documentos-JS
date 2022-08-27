function contar() {
    let ini = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let passo = document.getElementById('txt3')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando <br>'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if (p <=0){
                window.alert('Passo inválido! considerando PASSO 1')
                p = 1
            }
            if(i < f){
                //Contagem crescente
                for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}	`
                }
                res.innerHTML += `\u{1f3c1}`
            }else{
                //Contagem regressiva
                for(let c = i; c >= f; c -=p){
                res.innerHTML += ` ${c} \u{1f449}`
                }
                res.innerHTML += `\u{1f3c1}`
                
            }
    }

}