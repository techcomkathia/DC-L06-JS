//requisição de um módulo
const somar = require('./funcoes/somar')
const prompt = require('prompt-sync')()
const criarArray = require('./atividade1')
const calculadora = require('./funcoes/4operacoes')

let soma1 = somar(2,3)
//let texto = prompt('Digite algo: ')
// console.log(`Resultado da soma é ${soma1}`)
// console.log(texto)

let exemploArray = criarArray(3)

let calculadoraSoma = calculadora.somar(2,2)
let calculadoraDivisao = calculadora.dividir(2,0) //divisao impossível

console.log(calculadoraSoma)
console.log(calculadoraDivisao)