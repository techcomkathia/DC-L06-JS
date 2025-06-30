//importar o controller de categorias
const categoriasControllers = require('../controllers/categoriasControllers')
const validacaoCategoria = require('../middlewares/validacaoMiddleware')
//importar o express
const express = require('express')
//criar o router que permite a criação de rotas para um grupo de recursos separados
const rotasCategorias = express.Router()
const autenticacaoMiddleware = require('../middlewares/autenticacaoMiddleware')

rotasCategorias.use(express.json())

//criar rotas para categorias
//localhost:5000/categorias/
rotasCategorias.get('/', categoriasControllers.buscarCategorias)
//localhost:5000/categorias/:id
//app.metodo('/:id', categoriasControllers.buscarUmaCategoria)
//rotasCategorias.get('/:id', categoriasControllers.buscarUmaCategoria)
rotasCategorias.post('/',autenticacaoMiddleware, validacaoCategoria, categoriasControllers.criarCategoria)

//localhost:5000/categorias
//rotasCategorias.metodo('url', controller)
//get '/' -----> localhost:5000/categorias/
//post '/' ------> localhost:5000/categorias/

module.exports = rotasCategorias