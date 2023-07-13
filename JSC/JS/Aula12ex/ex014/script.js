var msn = document.getElementById('msg')
var agora = new Date()
var hora = agora.getHours()
hora = 4
var fotos = document.getElementById('foto')


if(hora > 4 && hora < 12){
    
    msn.innerHTML = `Bom dia! </br> Agora são exatamente ${hora} horas.`
    fotos.src = 'manha.png'
    document.body.style.background = 'rgb(227, 230, 15)'
}else if(hora > 12 && hora < 18){
   
    msn.innerHTML = `Boa tarde!</br> Agora são exatamente ${hora} horas.`
    fotos.src ='tarde.png'
    document.body.style.background = 'rgb(189, 84, 35)'
}else if( hora <= 4){

    msn.innerHTML = `Boa madrugada!</br> Agora são exatamente ${hora} horas.`
    fotos.src ='noite.png'
    document.body.style.background = 'rgb(24, 31, 97)'
} else{
    
    msn.innerHTML = `Boa noite!</br> Agora são exatamente ${hora} horas.`
    fotos.src ='madrugada.png'
    document.body.style.background = 'black '
}
