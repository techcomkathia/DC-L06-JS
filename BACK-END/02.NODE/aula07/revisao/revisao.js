// o que é uma função de callback? 
//Uma função que é passada para um outra função, como parâmetro. 
//A função que recebe a função callback como parâmetro, chama essa função de callback quando necessário

function falarNome(nome){
    console.log(`Meu nome é ${nome}`)
}

function somar(){
    console.log(2 + 2)
}

function funcaoUsaCallback(nome, funcaoCallback){
    somar()
    console.log('sou a função que recebe uma função como parâmetro')
    funcaoCallback(nome)

}

funcaoUsaCallback('Luiz', falarNome)
funcaoUsaCallback('Ana', (nome)=>{
    console.log('sou uma função de callback DEFINIDA COMO UMA ARROW FUNCTION')
    console.log(`O parâmetro que eu recebi foi ${nome}`)
})


