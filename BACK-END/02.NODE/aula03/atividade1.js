// leia as informações do arquivo usuarios.json e mostre como mensagem da resposta para o servidor que será executado na porta 3500

// use o módulo fs - para ler o arquivo
const fs = require('fs')
// use o módulo http - para criar o servidor e escrever uma mensagem na resposta
const http = require('http')

// criação do servidor

/*let usuarios =fs.readFileSync('usuarios.json', 'utf-8', (erro, conteudo)=>{
    if(erro){
        console.log(`Deu ruim ${erro.message}`) // erro
        return (erro.message)
    }

    console.log(conteudo)
    return (conteudo)
})

const server = http.createServer((req, res)=>{
    res.write(usuarios)
    res.end()
})

server.listen(3500, ()=>{
    console.log('Servidor rodando na porta 3500')
})*/


async function main(){
    let usuarios = await fs.promises.readFile('usuarios.json', 'utf-8')
    console.log(usuarios)

    const server = http.createServer((req, res)=>{
        res.write(usuarios)
        res.end()
    })
    
    server.listen(3500, ()=>{
        console.log('Servidor rodando na porta 3500')
    })
}

main()


