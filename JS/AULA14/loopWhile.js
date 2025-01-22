let contador = 0
let repetir = true
let letra = 'a'

while( repetir ){
    contador = contador + 1 // contador += 1  ou contador++
    console.log('Repetir o loop while')
    repetir = confirm('Deseja parar o loop?') // true ou false
}


while('a' == letra){
    console.log('Repetir o loop while')
    letra = prompt('Digite uma letra')
}



console.log('fora do loop')
console.log(contador)