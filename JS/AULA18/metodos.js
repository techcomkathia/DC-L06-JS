let numeros = [1,2,3,4,5]
console.log(numeros)
// inserir informações pelo indice
numeros[numeros.length] = 6
console.log(numeros)



// MANIPULAÇÃO DOS ÚLTIMOS ELEMENTOS
// pelo método push
numeros.push('ultimo')
numeros.push('depois do último elemento')
console.log(numeros)
// exclusão do último elemento do array
let excluido = numeros.pop() // excluir e retornar o elemento excluído
console.log(numeros)
console.log(`O numero excluido foi ${excluido}`)












/*
// MANIPULAÇÃO DOS PRIMEIROS ELEMENTOS
// pelo método unshift
numeros.unshift('A')
numeros.unshift('B')
console.log(numeros)
// exclusão do primeiro elemento do array
let excluido2 = numeros.shift()
console.log(`O numero excluido foi ${excluido2}`)
console.log(numeros)*/