const fs =  require('fs')
const caminho = 'ola.txt'
const caminho2 = 'numero.txt'
const codificacao = 'utf-8'

// método de leitura

/*fs.readFile(caminho, codificacao, (erro, conteudo)=>{

    if(erro){
        console.log(`Deu ruim ${erro.message}`) // erro
    }

    console.log(conteudo)

})*/

fs.readFile(caminho, codificacao, (erro, conteudo)=>{
    //verificar se tem erro
    if(erro){
        console.log(`Deu ruim ${erro.message}`) // erro
    }

    let numero = Number(conteudo)
   
    //verificar se o numero é par ou impar
    if(numero % 2 == 0){
        console.log(`O numero ${numero} é par`)
    }
    else if (numero % 2 == 1){
        console.log(`O numero ${numero} é impar`)
    }
    else{
        console.log('O conteudo nao é um numero')
    }
})