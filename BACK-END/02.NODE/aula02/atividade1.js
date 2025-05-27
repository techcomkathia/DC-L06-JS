// você foi designado para verificar se os arquivos de texto da avaliação institucional recebidos pelo sistema têm mais de 500 caracteres. 
// Crie um arquivo que leia os arquivos de texto e mostre uma mensagem no console se o arquivo lido atende o critério ou não.

// use a propriedade .length para as strings :)

const fs =  require('fs')
const caminho = 'ola.txt'
const codificacao = 'utf-8'

fs.readFile(caminho, codificacao, (erro, conteudo)=>{

    if(erro){
        console.log(`Deu ruim ${erro.message}`) // erro
        return (erro)
    }

    console.log(conteudo)
    console.log(`O arquivo tem ${conteudo.length} caracteres`)

    //validação se o tamanho atende aos critérios

    if(conteudo.length > 500){
        console.log('O arquivo não atende aos critérios. Possui mais de 500 caracteres')
        return ('Não atende')
    }
    else{
        console.log('O arquivo atende aos critérios')
        return ('Atende')
    }
})