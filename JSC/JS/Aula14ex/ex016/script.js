var inicio = document.getElementById('val1')
var final = document.getElementById('valf')
var passo = document.getElementById('valp')
var msg = document.getElementById('res')


function verificar(){
    
    if(inicio.value.length == 0|| final.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] FALTAM DADOS!')

        
    } else {
    msg.innerHTML = 'Contando: </br>'
    var i = Number(inicio.value)
    var p = Number(passo.value)
    var f = Number(final.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1 !')
            p = 1
        }
    if(i < f) {

            for(var c = i; c <= f; c += p){
        msg.innerHTML +=  ` ${c} \u{1F449}`

        }
    
     
    } else{
        for(var c = i; c >= f; c -= p){
            msg.innerHTML +=  ` ${c} \u{1F449}`
    
            }
        
         
        
    }
   msg.innerHTML += '\u{1F3C1}'
    }
}