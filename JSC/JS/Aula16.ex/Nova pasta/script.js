let nu = document.getElementById('num')
let lista = document.getElementById('tab')
let res = document.getElementById('res')
let valores = []


function isnumero(n){
     
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}

function inlist(n, l){
    if(l.indexOf(Number(n)) != -1){
    return true 
    }else{ 
    return false

}
}

function cnum(){
    
        if(isnumero(nu.value) && !inlist(nu.value, valores)){
            valores.push(Number(nu.value))
            let item = document.createElement('option')
            item.text = `Valor adicionado ${nu.value}.`
            lista.appendChild(item)

        }else{
            window.alert('[ERRO] VALOR INVALIDO OU JA ENCONTRADO NA LISTA!')
        }
        nu.value = ''
        nu.focus()
}
function fim(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            
            if(valores[pos]> maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
         media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.<p>` 
        res.innerHTML += `<p>O maior valor encontrado foi ${maior}.<p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}.<p>`
        res.innerHTML +=`<p>Somando todos os valores temos ${soma}.<p>`
        res.innerHTML +=`<p>A média de todos os valores é ${media}.<p>`
    }
}