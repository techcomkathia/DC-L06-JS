function minhaFuncao() {
    // funções sem parâmetros
    console.log('função sem parâmetros')
}

function somar(a,b){
    console.log(a + b)
}

//somar(2,3)
//somar(10,20)
// passando parametros a mais
//somar(2,3,4,5) // os parâmetros a mais serão ignorados

// passando parâmetros a menos
//somar(2) // os parâmetros a menos recebem o valor undefined
// 2 + undefined = NaN


//let escolha = confirm('Deseja parar o loop?') // retorna true ou false

//let texto = Number(prompt('Digite uma palavra'))	// retorna um número  ou NaN

//let retornoAlert = alert('Qualquer coisa') // não tem retorno

//let retornoConsole = console.log('qualquer coisa')


function falarFortaleza(nome){
    return `${nome}, eiii Maaah!`
}

function falarRecife(nome){
    return `${nome}, eiii boy!`
    console.log('não sou executado pois estou após o retorno')
}

function falarSalvador(nome){
    return `${nome}, eiii pivete!`
}

function falarCidade(funcaoEscolhida, nome){
    console.log('Sou uma função que executa algo específico e recebe uma outra função como parametro')
    //nomeDaFuncao()
    console.log(funcaoEscolhida(nome)) //falarSalvador('Ana')
}

falarCidade(falarFortaleza, 'Cleitinho')
falarCidade(falarFortaleza, 'Zé')
falarCidade(falarSalvador, 'Ana')
// funções de callback são funções programadas para receber e executar outras funções

// construa uma funcão chamada calcularAlert que irá receber 3 parametros (numero1, numero2, funcaoDeOperacao)
// a operação será uma função de callback que deverá ser chamada dentro da funcao calcularAlert
// a função de callback deverá receber 2 parametros (numero1, numero2)
// retornar o resultado da operação matemática correspondente no alert




const arrowFunctionUmaLinha = () => console.log('sou uma função de callback')
const arrowFunctionComParametros = (parametro1, parametro2) => console.log(parametro1 + parametro2)

const arrowFunctionComMuitasLinhas = () => {
    console.log('Operação1')
    console.log('Operação2')
    console.log('Operação3')
    let x = 10
    let y = 20
    return x + y
}

arrowFunctionComParametros(10,20)
arrowFunctionUmaLinha()