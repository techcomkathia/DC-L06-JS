const express = require('express')
const app = express()
const AutoresControler = require('./controlers/AutoresControler')

app.use(express.json()) // permite o express entender o corpo da requisição

app.get('/', (req, res)=>{
    res.json({
        api: 'Biblioteca do Cleitinho',
        versao: '1.0',
        autor: 'Káthia'
    })
})

// rotas para autores
app.get('/autores', AutoresControler.buscarTodosAutores)
app.get('/autores/:id', AutoresControler.buscarUmAutor)
app.post('/autores', AutoresControler.criarAutor)
app.delete('/autores/:id', AutoresControler.deletarAutor)
app.put('/autores/:id', AutoresControler.atualizarAutor)

//para consumir rotas definidas em um arquivo separado utilize o app.use('/endpointRaiz', rotasAutores)
app.use('/autores', rotasAutores)
app.use('/categorias', rotasCategorias)
app.use('/livros', rotasLivros)
// localhost:5000/autores/

// rotas para categorias


//rotas para livros


module.exports = app