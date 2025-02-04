/*let x = 'guarda apenas uma informação' // string
x = 10 // number

// arrays - listas
let  array = [1,'segunda', 3, 'coisa', true]

console.log(array)
console.log(x)
//exibir a segunda informação do array
console.log(array[1])
console.log(array[0])
//o índice da informação do array comeca em 0


//adicionar novas informações ao array
array[5] = 'item adicionado ao array pelo indice'
console.log(array)
//atualizar o valor da primeira informação do array
array[0]= 'subistitui o valor da primeira informação do array'
console.log(array)*/

let numeros = [1,2,3,4,5]

let coisas = [
    [1,2,3],
    ['a','b','c'],
    [true, false,true],
    ['abacaxi', 'banana', 'caju'],
    [[1,2,3], [4,5,6], [7,8,9]]
]

console.log(numeros[0]) // 1

console.log(coisas[1]) // ['a','b','c']
console.log(coisas[1][1]) // b

console.log(coisas[4][2][1]) // 8

// array.pop() // remove o ultimo elemento
// array.push() // adiciona um novo elemento ao final do array

// array.shift() // remove o primeiro elemento
// array.unshift() // adiciona um novo elemento ao inicio do array
