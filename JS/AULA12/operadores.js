let inteiro = 10 
console.log(inteiro)

let soma = inteiro + 2
let subtracao = inteiro - 2
let multiplicacao = inteiro * 2
let divisao = inteiro / 2


let prontoFloat = 10.5


let numString = '10.5'
let somaString = numString + 2

// o operador + concatena e soma
// concatena palavras mais qualquer coisa
// soma numeros
let subtracaoString = numString - 2 
let multiplicacaoString = numString * 2
let divisaoString = numString / 2
console.log(somaString)
console.log(subtracaoString)
console.log(multiplicacaoString)
console.log(divisaoString)  

// letras com operações matemáticas retornam NaN (not a number)
let letra = '8'
let subtracaoLetra = letra - 2
console.log(subtracaoLetra)
// qualquer coisa que é somada, dividida ou multiplicada por NaN retorna NaN
let multiplicacaoLetra = NaN * 2
console.log(multiplicacaoLetra)



let idade = 20
console.log(idade)
//idade = prompt('Qual a sua idade?') // sempre retorna uma string
console.log(idade)
console.log(typeof idade)
console.log( idade + 100) // concatena
console.log( idade - 100) 
console.log( idade * 100) 
console.log( idade / 100) 

// convertendo string para number
let n1 = '10' //int
let n2 = '20.5' //float
// o JS compreende essas strings de números como números para operações matemáticas (subtracao, multiplicacao,divisao etc) mas não para SOMA (realiza concatenação)
console.log(n1 + 1) //101
console.log(n2 + 1) //20.51
console.log(n2 - 1) //19.5
console.log(n1 * 10) //100
console.log(n2 / 10) //2.05

// para os casos de operações com números no formato string precisamos converter a string para number (boa prática)

let numero1convertido = Number(n1) // '10' -> 10
let numero2convertido = Number(n2)// '20.5' -> 20.5
console.log(numero1convertido + 1)
console.log(numero2convertido + 1)

// Crie uma variável que peça (prompt) o salário do usuário e converta para number (Number(salario))
// em seguida adicione mais 1000 dinheiros ao salario e mostre o novo salario no console

let salario = prompt('Qual o seu salario?(Ex.: 1000.50)') // sempre retorna uma string
salario = Number(salario)
salario = salario + 1000 // importante converter o salario para number antes de adicionar 1000, caso contrário o JS vai fazer a operação como string
console.log(salario)

