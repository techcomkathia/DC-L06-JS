const http = require('http')
const fs = require('fs') 

//criar o servidor

let objeto = {
    nome: 'Allan',
    saldo : '20k'
}

const server = http.createServer((req, res)=>{
    //escrever uma mensagem na resposta
    res.write(JSON.stringify(objeto))
    res.end()
})

server.listen(3000)