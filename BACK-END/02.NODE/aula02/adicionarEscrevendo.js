const fs =  require('fs')
const caminho = 'ola.txt'
const codificacao = 'utf-8'

/*fs.writeFile(caminho, 'TESTE', codificacao, (erro, conteudo)=>{
    console.log(conteudo)
})*/
const prompt = require('prompt-sync')()
const texto = prompt('Digite um texto: ')

fs.appendFile(caminho, texto, codificacao, (erro, conteudo)=>{
    console.log(conteudo)
})