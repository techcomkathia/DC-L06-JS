//crie um servidor com o uso do express, rodando na porta 5000.
//crie uma rota raiz que retorne a mensagem 'Api da Biblioteca do Cleitinho'

const express = require('express')
const app = express()

app.use(express.json())

let listaLivros = [
    {id: 1, nome: 'Livro 1', autor: 'Autor 1', qtdPaginas: 100, disponivel: true},
    {id: 90, nome: 'Livro 2' , autor: 'Autor 2', qtdPaginas: 200, disponivel: true},
    {id: 300, nome: 'Livro 3', autor: 'Autor 3', qtdPaginas: 300, disponivel: false},
]

app.get('/', (req, res)=>{
    res.send(JSON.stringify({
        api: 'Biblioteca do Cleitinho',
        versao: '1.0',
        autor: 'Káthia'
    }))
})

//crie uma rota do tipo get para livros (listar todos os livros)

//crie uma rota post para criar um  livro
//valide se todos os campos foram preenchidos (nome, autor, qtdPaginas, disponivel)
//sucesso: status 200 mensagem 'Livro criado com sucesso'
//erro: status 400 mensagem 'Todos os campos devem ser preenchidos'
app.post('/livros', (req, res)=>{
    let novoLivro = req.body
    let resposta ={}

    //validar os campos obrigatórios
    //sucesso
    if(novoLivro.nome && novoLivro.autor && novoLivro.qtdPaginas && novoLivro.disponivel){
        //criar o id para o novo livro
        novoLivro.id = listaLivros[listaLivros.length - 1].id + 1
        //adicionar o novo livro na lista de livros
        listaLivros.push(novoLivro)

        resposta= {
            status:200, 
            message: 'Livro criado com sucesso', 
            livro: novoLivro}
        //devolver a resposta
        res.status(200)
        res.send(JSON.stringify(resposta))
    }
    //erro
    else{
        resposta = {
            status: 400,
            message: 'Todos os campos devem ser preenchidos: nome, autor, qtdPaginas, disponivel'
        }

        //devolver a resposta
        res.status(400)
        res.send(JSON.stringify(resposta))           
    } 
})

//rota de atualização (por id)'

//rota de exclusão (por id)

app.listen(5000, ()=>{
    console.log('Servidor rodando na porta 5000')
})

