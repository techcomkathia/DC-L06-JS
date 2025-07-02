const express = require('express');
const rotasProdutos = express.Router();
const controllerProduto = require('../controllers/produtoController');
const autenticacao = require('../middlewares/autenticacao');


rotasProdutos.post('/', autenticacao, controllerProduto.postProduto);

module.exports = rotasProdutos;