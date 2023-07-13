

function gerar(){
var valor = document.getElementById('val')
var tabuada = document.getElementById('tab')
    if(valor.value.length == 0){
     window.alert('[ERRO] NUMERO NAO FOI DIGITADO!')

    }else{
       var v = Number(valor.value)
       var l = 1
       for(l = 1; l <= 10; l++){
        var ta = document.createElement('option')
        ta.text = `${v} x ${l} = ${v*l}`
        tab.appendChild(ta)
        ta.value = `tab${l}`
       }
    }

}