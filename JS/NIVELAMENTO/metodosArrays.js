// letras
let letras = ['A', 'B', 'C', 'D', 'E', 'F']

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let pessoas = [
    {nome: 'Joaquim', idade: 20},
    {nome: 'Cleitinho', idade: 12},
    {nome: 'Maria', idade: 20},
    {nome: 'Clara', idade: 50},
    {nome: 'Pedro', idade: 16},
    {nome: 'Maria', idade: 28}
]

// forEach - iterar sobre o array e aplicar uma função de callback a cada um dos elementos ( sem retornar nada )

function mostrarDobro(item) {
    console.log(item * 2)
}

numeros.forEach(mostrarDobro)

// for( let i = 0; i < numeros.length; i++){
//     mostrarDobro(numeros[i])
// }

let retornoForEach = numeros.forEach((y)=>{
    console.log(y**2)
})
console.log(numeros)
console.log(retornoForEach)

let retornoMap = letras.map((elemento) => {
    console.log(elemento)
    return (elemento+'!')
    
})
console.log(letras)
console.log(retornoMap)

// reduce - reduz um array a um único elemento

let retornoReduce = numeros.reduce(
    (somaElementos, item) => somaElementos + (item) 
)

let retornoReduceComValorInicial = numeros.reduce(
    (somaElementos, item) => somaElementos + (item), -200
)


let retornoReduceLetras = letras.reduce(
    (somaElementos, item) => somaElementos + item 
)

let somaIdadePessoas = 0

pessoas.forEach( pessoa => {
    console.log(pessoa.idade)
    somaIdadePessoas += pessoa.idade
})
console.log(pessoas)
console.log(somaIdadePessoas)

console.log(numeros)
console.log(retornoReduce)
console.log(retornoReduceComValorInicial)

console.log(letras)
console.log(retornoReduceLetras)


let pessoasMais18 = pessoas.filter((elementoArray) => {
    if(elementoArray.idade > 18){
        return elementoArray
    }
    else{
        return false
    }
})

pessoasMais18 = pessoas.filter((elementoArray) => elementoArray.idade > 18)  


console.log(pessoas)
console.log(pessoasMais18)


let numerosPares = numeros.filter((item) =>  item % 2 == 0)

console.log(numeros)
console.log(numerosPares)