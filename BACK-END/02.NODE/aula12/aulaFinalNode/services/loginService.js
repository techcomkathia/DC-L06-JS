// services/loginService.js
const usuarioService = require('./usuarioService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "seu_segredo_super_secreto"; // ideal seria usar process.env

async function login(email, senha) {
    try {
        
        // lógica necessária para a criação do token de autenticação
        return
    } catch (error) {
        return { status: 400, erro: "Erro ao fazer login: " + error.message };
    }
}

module.exports = {
    login
};
