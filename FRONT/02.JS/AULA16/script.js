//variáveis definidas fora das funções podem ser acessadas dentro das funções
let variavelGlobal = 'sou acessível dentro e fora das funções, em qualquer parte do código'


function demonstrarUsoFuncao(){
    alert('Qualquer coisa')
    console.log('Tudo que estiver dentro da função só será executado quando ela for chamada')
    console.log(variavelGlobal)
    // variáveis definidas apenas dentro das funções não podem ser acessadas fora da mesma
    let variavelLocal = 'não sou acessível fora da função'
    console.log(variavelLocal)
}

// para executar uma função é necessário 2 passos : 
// 1 - declarar a função
// 2 - invocar ou executar a função

//demonstrarUsoFuncao()
//console.log(variavelLocal) //erro

function somar(){
    console.log(2 + 2)

}

function subtrair(num1, num2){
    console.log(num1 - num2)
}

/*somar()
somar()

subtrair(10, 5)
subtrair(20, 10)
subtrair()

alert('texto')*/
console.log( 'Manhã'=='manhã') //false
console.log('ManhÃ'.toLocaleLowerCase())
console.log('MAnhÃ'.toLocaleLowerCase()== 'manhã')

// faça a função saudacao 
// saudacao receberá dois parâmetros. Nome e turno(manha,tarde e noite)
// saudacao deverá retornar um string com o nome e de acordo com o turno , mostrar 'bom dia', 'boa tarde' ou 'boa noite' + o nome informado
// exemplo: saudacao('Joaquim', 'manha') -> Bom dia,Joaquim!

// 1º passo criar a função com parametros
// 2º passo criar estrutura condicional (if/else if/else ou switch/case)
// 3º passo retornar o resultado

//4º invocar a função passando os parametros
