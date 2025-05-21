//requisição de um módulo
const somar = require('./funcoes/somar')
const prompt = require('prompt-sync')()

let soma1 = somar(2,3)
let texto = prompt('Digite algo: ')
console.log(`Resultado da soma é ${soma1}`)
console.log(texto)