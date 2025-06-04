     //para o método POST na url /cleitinho++
    //mostre apenas o nome do usuário no terminal 
    //no corpo da requisição deverá ser informado um objeto com
    /*{ 
        "nome": "cleitinho",
        "idade": 12,
        "email": "cleitinho@exemplo.com"
    }*/

    const http = require('http')
    const fs = require('fs')

    const server = http.createServer((req, res)=>{
        if(req.method == 'POST' && req.url == '/usuarios'){
            let corpoRequisicao = ''
            
            req.on('data', conteudo =>{
                corpoRequisicao += conteudo            
            })

            req.on('end', ()=>{
                let objeto = JSON.parse(corpoRequisicao) //CONVERTER PARA OBJETO
                console.log(objeto.nome)
                let arquivoUsuarios = fs.readFileSync('usuarios.json', 'utf-8') //conteúdo do arquivo
                let arrayUsuarios = JSON.parse(arquivoUsuarios) //converter o conteúdo do arquivo para um OBJETO (array)
                //adicionar id ao objeto
                objeto.id = arrayUsuarios.length + 1
                arrayUsuarios.push(objeto)
                let arrayJsonAtualizado = JSON.stringify(arrayUsuarios) //TRANSFORMAR OBJETO EM STRING
                fs.writeFileSync('usuarios.json', arrayJsonAtualizado) //persistir as informações no arquivo json
            })

            res.write('finalizado')
            
        }
        res.end()
    })


    server.listen(4000, ()=>{
        console.log('Servidor rodando na porta 4000')
    })