let compras = [100, 20, 30, 10.5, 8.2, 25] // length = 6
let somaCompras = 0 //acumulador
compras[6] = 2 //compras.length = 7
compras[7] = 50
compras[8]= 1000
//compras[0]= 30

// inserções e deleções no inicio do array são obrigatoriamente através de métodos

// inserir = unshift
compras.unshift(30) 
console.log(compras)
compras.unshift('a') //adiciona o elemento no inicio
compras.unshift('outro')
console.log(compras)
// deletar = shift
let deletado =compras.shift() // deleta o primeiro elemento 'outro
deletado =compras.shift()  // deleta o primeiro elemento 'a'
console.log(compras)
console.log(deletado)

// mostrar todos os valores das compras e somar em uma variável 
for(let i = 0; i < compras.length; i++){
    // mostrar a informação
    console.log(compras[i])
    // somar os valores
    somaCompras += compras[i] // somaCompras = somaCompras + compras[i]
}

console.log(`O total das compras foi ${somaCompras}` )

let letras = ['a', 'b']
// inserir no final = push
letras.push('c')
console.log(letras)
// deletar no final = pop
letras.push('d')
console.log(letras)
letras.shift('e') 
console.log(letras)
console.log(deletado)

// verificar a existência de um elemento no array
let existeCompra = compras.includes(50000)
console.log(existeCompra)

let existeLetra = letras.includes('C'.toLocaleLowerCase())
console.log(existeLetra)

// métodos para mudança de case
// toUpperCase - converter tudo para maiúsculo
// toLowerCase - converter tudo para minúsculo

// excluir em uma posição especifica
letras.splice(1,2)
console.log(letras)

