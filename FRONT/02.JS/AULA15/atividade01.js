
// usando o loop for, crie um algoritmo que exiba todos os números de 0 até o numero passado pelo usário no console, por fim mostre a quantidade de números e a soma de todos eles.

let numUsuario = Number(prompt('Digite um numero para finalizar a contagem'))

let qtdNumeros = 0
let somaNumeros = 0
//declaração e inicialização do valor da contagem; condição; atualização ou incremento
for(let i = 0; i <= numUsuario; i++){
    console.log(i)
    qtdNumeros += 1 // qtdNumeros = qtdNumeros + 1
    somaNumeros += i // somaNumeros = somaNumeros + i
}

console.log('Quantidade de números' + qtdNumeros)
console.log(`Quantidade de números ${qtdNumeros}`) //as aspas serão substituidas pelo acento gráfico 
console.log('Soma dos números ' + somaNumeros)
console.log(`Soma dos números ${somaNumeros}`) //as aspas são substituidas pelo acento gráfico