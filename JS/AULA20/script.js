let numeros = [1,2,3,4,5]
function dobrar(num){
    console.log(num*2)
}


// MÉTODOS PARA ARRAYS
// forEach - iterar sobre o array e aplicar uma função de callback a cada um dos elementos ( sem retornar nada )
numeros.forEach(dobrar)

numeros.forEach((item)=> {
        console.log(item)
    }
)

// map - iterar sob o array, aplicar uma funcao de callback a cada um dos elementos (retornar um novo array )
let letras = ['a', 'b', 'c', 'd', 'e']
// criar um novo array com as letras maiusculas

let letrasMaiusculas = letras.map((item) => {
     return item.toLocaleUpperCase()
    }
)
console.log(letrasMaiusculas)
console.log(letras)

// reduce - iterar sob um array, aplicar uma funcao de callback a cada um dos elementos (retornar um unico valor ) e acumular esses valores em uma variável

// let total =  arrayReferencia.reduce((acumulador, itemArray) => {
// aplicação da função de callback e retorno do valor calculado   
//})

// let numeros = [1,2,3,4,5]

let somaNumeros = numeros.reduce((soma, num)=>
    { return soma + num}
)

console.log(somaNumeros)
console.log(numeros)

let somaNumerosValorInicial = numeros.reduce(
    // primeiro parâmetro função de callback
    (soma, num ) => { return soma + num} 
    , 
    // segundo parâmetro valor inicial para o acumulador
    100
)
console.log(somaNumerosValorInicial)


//filter - retorna um array filtrado com os elementos que passaram na condição
let numerosPares = numeros.filter((num) => {
    if(num % 2 == 0){
        return num
    }
})
console.log(numerosPares)