// arquivo externo de js

// funções output
// mostrar informação na tela do navegador
console.log('Olá Mundo!')
console.log("Olá Mundo!")
// alert('Olá Mundo!')


// funções input
// prompt - capta uma informação digitada pelo usuário no formato de texto
// confirm - capta uma informação digitada pelo usuário no formato de booleano

// variáveis

let x = 10
console.log(x)
x = 100
console.log(x)

var y = 20
console.log(y)
var y = 'minha senha'
console.log(y)

const pi = 3.14
console.log(pi)
// pi = 'minha senha'

// nome -> possivel alterar
let nome = 'Cleitinho'
// idade -> possivel alterar
let idade = 12
// email -> possivel alterar
let email = 'gatolaranja@gato.com' //string
// dataNascimento -> impossivel alterar
const dataNascimento = '12/12/12'

// exibir as informacoes no console
console.log('O nome é ' + nome)
console.log('A idade é ' + idade )
console.log('O email é ' + email)  
console.log('A data de nascimento é ' + dataNascimento)


// funções input
// prompt - capta uma informação digitada pelo usuário no formato de texto
let textoUsuario = prompt('Texto de instrucao para o que deve ser inserido no prompt')
console.log(textoUsuario)

// atualize os valores das variaveis nome, idade, email
// utilizando o prompt
nome = prompt('Qual o seu nome?')
idade = prompt('Qual a sua idade?')
email = prompt('Qual o seu email?')

console.log('O nome é ' + nome)
console.log('A idade é ' + idade )
console.log('O email é ' + email)
