// importação dos módulos

const http = require('http')
const fs = require('fs')

// criação do servidor

const server = http.createServer((req, res)=>{

    if(req.method == 'GET' && req.url == '/'){
        res.writeHead(200,{'content-type': 'application/json'})
        let json = JSON.stringify({
            api: 'usuarios',
            versao: '1.0',
            autor: 'Káthia'
        })
        res.write(json)
    }
    else if(req.method == 'GET' && req.url == '/usuarios'){
        res.writeHead(200,{'content-type': 'application/json'})
        let usuariosJSON = fs.readFileSync('usuarios.json', 'utf-8')
        res.write(usuariosJSON) //dispensa o parse 
    }

    else if(req.method == 'PUT' && req.url == '/teste'){
        // trazer os dados
        let dados = ''
        req.on('data', conteudo => {
            dados += conteudo
        })
        req.on('end', () => {
            //mostra no terminal os dados enviados no formato de JSON
            console.log(dados)          
        })    
    }
    
    res.end()
    /*else if (req.method == 'POST' && req.url == '/usuarios'){

        let corpoRequisicao = ''

        req.on('data', conteudo =>{
            corpoRequisicao += conteudo            
        })

        req.on('end', ()=>{
            //trazer o conteúdo do arquivo usuarios para uma variável no formato do OBJETO
            let usuariosJSON = fs.readFileSync('usuarios.json', 'utf-8') //conteúdo do arquivo
            //converter o conteúdo do arquivo para um OBJETO
            let arrayUsuarios = JSON.parse(usuariosJSON)

            let novoUsuario = JSON.parse(corpoRequisicao)//CONVERTER PARA OBJETO
            //adicionar o novo usuário ao array
            arrayUsuarios.push(novoUsuario)    
            
            // persistir as informações no arquivo json
            let arrayJsonAtualizado = JSON.stringify(arrayUsuarios) //TRANSFORMAR OBJETO EM STRING
            fs.writeFileSync('usuarios.json', arrayJsonAtualizado)
            
        })
        res.write('finalizado')
    }

    else if (req.method == 'DELETE' && req.url == '/usuarios/1'){
        res.write('Usuário 1 deletado')
    }

    else if (req.method == 'PUT' && req.url == '/usuarios/1'){
        res.write('Usuário 1 atualizado')
    }*/
    
})

server.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000. http://localhost:3000')
})
        