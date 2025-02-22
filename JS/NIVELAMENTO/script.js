// arrays
// objetos
// métodos para arrays (forEach, map, filter e reduce)

let numeros = [1, 2, 3, 4, 5, 6]

let coisas = [ true, 1, 'coisa', 2.5, false, {nome: 'Cleitinho', idade:12}] //6

// index 0...n-1
// tamanho do array (array.length)


console.log(coisas.length)
coisas[6]= 'novo elemento'
console.log(coisas)
coisas[9]= 'coisinha'
console.log(coisas)
console.log(coisas[7])
console.log(coisas[8])
coisas[8] = 'coisa'
console.log(coisas[9])
console.log(coisas)
let tamanho = coisas.length // 6

for(let index = 0; index < tamanho; index++){

    console.log(coisas[index])
    coisas[index] = '!'
    console.log(coisas)
    console.log('----------------------')

}

console.log(coisas)

