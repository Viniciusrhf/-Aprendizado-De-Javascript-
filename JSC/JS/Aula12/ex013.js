var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    case 0:
        console.log('Domingo legal!')
    break
    case 1:
        console.log('Segunda legal!')
    break
    case 2:
        console.log('Terça legal!')
    break
    case 3:
        console.log('Quarta legal!')
    break
    case 4:
        console.log('Quita legal!')
    break
    case 5:
        console.log('Sexta legal!')
    break
    case 6:
        console.log('Sabado legal!')
        break
        default:
            console.log('Dia invalido!')
}