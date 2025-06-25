//use o express para criar um servidor web
const express = require('express')
const app = express()
const rotasCategorias = require('./routes/categoriasRoutes')

//middleware de recebimento de json
app.use(express.json())// permite que o express compreenda o body da requisição no formato json
app.get('/', (req, res)=>{
    res.send('Servidor rodando na porta 5000')
})
//rotas
//localhost:5000/categorias 
app.use('/categorias', rotasCategorias)




module.exports = app

