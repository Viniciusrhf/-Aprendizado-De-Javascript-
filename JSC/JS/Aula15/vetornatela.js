let valores = [8,7,1,4,2,9]
valores.sort()

console.log(valores)

for(let pos in valores){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}



/*
for( let pos = 0; pos <valores.length ; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/