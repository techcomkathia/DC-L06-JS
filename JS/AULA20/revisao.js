// let x = console.log('função sem retorno') //undefined
// let numero = Number('222')
// let retorno = prompt('Digite algo')

function funcaoComRetorno(){
    return 'sou o retorno da funcao'
}

function funcaoSemRetorno(){
    console.log('sou a funcao sem retorno')
}

// let retorno1 = funcaoComRetorno()
// let semRetorno = funcaoSemRetorno()


// funcao(funcaoCallback)
function minhaFuncao ( funcaoCallback, parametro) {
    console.log('sou a função que recebe uma função como parâmetro')
    return funcaoCallback(parametro)
}

function somar10(numero){
    return numero + 10
}

function mostrarCoisa(coisa){
    alert(coisa)
}

// precisa receber um callback e um parâmetro
let x = minhaFuncao(somar10, 2)
let y = minhaFuncao(mostrarCoisa, 'qualquer coisa')
console.log(x)
