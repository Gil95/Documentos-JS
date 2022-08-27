function verificar(){
    
    //variáveis
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var fSex = document.getElementsByName('radsex')
    var idade = ano-Number(fAno.value)
    var genero = ''
    var cIdade = ''
        
    if( Number(fAno.value) == 0 || Number(fAno.value) > ano){

        window.alert('Verifique os dados e tente novamente')
    
    }else{
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if( fSex[0].checked ){

            genero = 'masculino'
            
            if( idade >= 0 && idade <= 10 ){
      
                cIdade = 'menino'
                img.setAttribute('src', 'child-boy.png')

            }else if( idade >= 11 && idade <= 11){
      
                cIdade = 'menino chato'
                img.setAttribute('src', 'luis.jpeg')
            }else if( idade <= 12 ){
      
                    cIdade = 'menino'
                    img.setAttribute('src', 'child-boy.png')

            }else if( idade >= 13 && idade < 18){
        
                cIdade = 'adolescente'
                img.setAttribute('src', 'teen-boy.png')

            }else if( idade >= 18 && idade < 32 ){
        
                cIdade = 'jovem adulto'
                img.setAttribute('src', 'adult-man.png')

            }else if( idade >= 32 && idade < 60){
        
                cIdade = 'homem adulto'
                img.setAttribute('src', 'middle-age-man.png')

            }else if( idade >= 60 && idade < 90){
        
                cIdade = 'idoso'
                img.setAttribute('src', 'old-man.png')
            
            }else if( idade >= 90){
        
                cIdade = 'matusalém'
                img.setAttribute('src', 'old-man.png')
            }
            
            age.innerHTML = `Verificamos um ${cIdade} de ${idade} anos.`

        }else if( fSex[1].checked ){

            genero = 'feminino'
            
            if( idade >= 0 && idade < 12 ){
      
                cIdade = 'menina'
                img.setAttribute('src', 'child-girl.png')
        
            }else if( idade < 17){
        
                cIdade = 'adolescente'
                img.setAttribute('src', 'teen-girl.png')
            
            }else if( idade < 21 ){
        
                cIdade = 'jovem adulta'
                img.setAttribute('src', 'adult-woman.png')
                
            }else if( idade == 22 ){
        
                cIdade = 'deusa linda do caralho'
                img.setAttribute('src', 'bb.jpeg')
            
            }else if( idade < 32 ){
        
                cIdade = 'jovem adulta'
                img.setAttribute('src', 'adult-woman.png')

            }else if( idade < 60){
        
                cIdade = 'mulher adulta'
                img.setAttribute('src', 'middle-age-woman.png')

            }else if( idade < 90){
        
                cIdade = 'idosa'
                img.setAttribute('src', 'old-woman.png')
            
            }else{
        
                cIdade = 'highlander'
                img.setAttribute('src', 'old-woman.png')
            }
        
            age.innerHTML = `Verificamos uma ${cIdade} de ${idade} anos.`
        }else{

            window.alert('Selecione o Sexo')}
        age.appendChild(img)
    }

}