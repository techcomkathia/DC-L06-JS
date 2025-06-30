const usuarioService = require('../services/usuarioService');
const bcrypt = require('bcrypt');


async function getUsuarios(req, res) {

    try{
        const usuarios = await usuarioService.getUsuarios();
        res.status(usuarios.status).json(usuarios);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }

}

async function postUsuario(req, res) {
    //hash de senha com bcrypt 
    //as validações de campos obrigatórios foram feitas pelo middleware validacaoUsuario

    const dados = req.body;

    try {
        const novoUsuario = await usuarioService.postUsuario(dados);
        res.status(novoUsuario.status).json(novoUsuario.dados);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
}

module.exports = {
    getUsuarios,
    postUsuario
}