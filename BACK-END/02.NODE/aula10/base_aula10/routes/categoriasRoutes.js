//importar o controller de categorias
const categoriasControllers = require('../controllers/categoriasControllers')
const validacaoCategoria = require('../middlewares/validacaoMiddleware')
//importar o express
const express = require('express')
//criar o router que permite a criação de rotas para um grupo de recursos separados
const rotasCategorias = express.Router()

rotasCategorias.use(express.json())

//criar rotas para categorias
rotasCategorias.get('/', categoriasControllers.buscarCategorias)
//rotasCategorias.get('/:id', categoriasControllers.buscarUmaCategoria)
rotasCategorias.post('/', validacaoCategoria, categoriasControllers.criarCategoria)

//localhost:5000/categorias
//rotasCategorias.metodo('url', controller)
//get '/' -----> localhost:5000/categorias/
//post '/' ------> localhost:5000/categorias/

module.exports = rotasCategorias