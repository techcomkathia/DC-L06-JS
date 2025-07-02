const express = require('express');
const rotasUsuario = express.Router();

// Importar controller
const usuarioControler = require('../controllers/usuarioController');
// Importação do middleware
const validacaoUsuario = require('../middlewares/validacaoUsuario');


// Rota GET (pública)
rotasUsuario.get('/', usuarioControler.getUsuarios);

// http://localhost:3000/usuarios/ POST
// Rota POST com middleware
rotasUsuario.post('/', validacaoUsuario, usuarioControler.postUsuario);

module.exports = rotasUsuario;
