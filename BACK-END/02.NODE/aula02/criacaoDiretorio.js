const fs =  require('fs')
const novoDiretorio = './novoDiretorioExemplo'
const codificacao = 'utf-8'

fs.mkdir(novoDiretorio, (erro)=>{

    fs.writeFile(`${novoDiretorio}/novoArquivo2.txt`, 'TESTE', codificacao, (erro, conteudo)=>{
        console.log('Arquivo criado')
    })
    console.log('Diretorio criado com um arquivo')
})