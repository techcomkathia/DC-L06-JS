//crie um servidor que tenha uma rota que retorne o arquivo usuarios.json
// rota : /usuarios
// e rotas que retornem cada um dos usuários do arquivo
// rota : /usuarios/:id
// id = req.params.id

const http = require('http')
const fs = require('fs')

const usuariosJSON = fs.readFileSync('usuarios.json', 'utf-8')

const server = http.createServer(
    (req, res)=>{

        const url = req.url
        const arrayUsuarios = JSON.parse(usuariosJSON)
        //rota raiz
        if(url == '/'){
            //confuguração dos metadados da resposta
            res.writeHead(200, {'Content-Type': 'application/json'})
            //escreve uma mensagem na resposta
            res.write(JSON.stringify({api: 'usuarios', versao: '1.0', autor: 'Káthia'}))
            //finaliza a resposta
            res.end()
        }
        //rota de todos os usuários
        else if(url == '/usuarios'){
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.write(usuariosJSON)
            //ou
            //res.write(JSON.stringify(arrayUsuarios))
            res.end()
        }
        //rota de um usuário
        else if(url == '/usuarios/1'){
            const id = 1
            // buscar o objeto usuario pelo id
            //filter ou find
            //filter : retorna um array com os elementos que satisfazem a condição
            //find : retorna o primeiro elemento que satisfaz a condição
            console.log(id)
            const usuario = arrayUsuarios.find((usuario)=>{
                if(id == usuario.id){
                    return true
                }
                else{
                    return false
                }
            })
            console.log(usuario)
            
            //caso de sucesso: usuario encontrado
            if(usuario){
                res.writeHead(200, {'Content-Type': 'application/json'})
                res.write(JSON.stringify(usuario))
                res.end()
            }
            //caso de erro: usuario nao encontrado
            else{
                res.writeHead(404, {'Content-Type': 'application/json'})
                res.write(JSON.stringify({erro: 'Usuário nao encontrado'}))
                res.end()
            }
            
        }
        else{
            res.write('Rota nao encontrada')
            res.end()
        }

    }
)

server.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000. http://localhost:3000')
})