

function verificar(){
var  id = document.getElementById('ano')
var data = new Date()
var anot = data.getFullYear()

var foto = document.getElementById('fotos')
var msg = document.getElementById('txt')

if(id.value.length == 0 || id.value >  anot){
    window.alert('[ERRO] Verifique novamento os dados !')
} else{
    var fsex = document.getElementsByName('sexo')
    var idade = anot - Number(id.value)
    var ge = ''
        if(fsex[0].checked ){
            var ge = 'Homem'
            if( idade <= 14){
    
                
                foto.src = 'criançah.png.png'
                
            }else if(idade > 14 && idade < 18){
               
                
               foto.src ='jovemh.png'
                
            }else if( idade < 60){
            
                
                foto.src ='homem.png'
              
            } else{
                
                foto.src ='idoso.png'
               
            }
        }else if(fsex[1].checked)  {
            var ge = 'Mulher'
            if( idade <= 14){
    
                
                foto.src = 'criançam.png'
                
            }else if(idade > 14 && idade < 18){
               
                
               foto.src ='jovemm.png'
                
            }else if( idade < 60){
            
                
                foto.src ='mulher.png'
              
            } else{
                
               
                foto.src ='idosa.png'
                
            }
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Detectamos ${ge} de ${idade} anos.`
        msg.appendChild(foto)
}




}



