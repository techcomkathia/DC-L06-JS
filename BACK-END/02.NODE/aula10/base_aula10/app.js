//use o express para criar um servidor web
const express = require('express')
const app = express()
const rotasCategorias = require('./routes/categoriasRoutes')
const rotaLogin = require('./routes/loginRoute')

//middleware de recebimento de json
app.use(express.json())// permite que o express compreenda o body da requisição no formato json
app.get('/', (req, res)=>{
    res.send('Servidor rodando na porta 5000')
})
//rotas
//localhost:5000/categorias 
app.use('/categorias', rotasCategorias)
app.use('/login', rotaLogin)


module.exports = app





// app.get('/', controler.rotaprincipal)
// //----------------------arquivoRotasCategorias-------------------------------------
// app.get('/categorias/', controlerCategorias.buscarCategorias)
// app.get('/categorias/:id', controlerCategorias.buscarUmaCategoria)
//---------------------arqui

