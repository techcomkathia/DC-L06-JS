const http = require('http')
const fs = require('fs')

let cleitinho = {
    nome: 'Cleitinho',
    cor: 'Laranja',
    raca: 'Gato',
    idade: 12,
    metodo: function(){ console.log('sou uma função') }
}

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('Rota raiz')        
    }
    else if(req.url == '/cleitinho'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(cleitinho))
    }
    else if(req.url == '/html'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(`
            <html>
                <body style="background-color: red;">
                    <h1>HTML</h1>
                </body>
            </html>`
        )
    }
    else{
        res.write('rota nao encontrada')
    }
    res.end()
})

server.listen(5000, ()=>{
    console.log('Servidor rodando na porta 5000: http://localhost:5000')
})