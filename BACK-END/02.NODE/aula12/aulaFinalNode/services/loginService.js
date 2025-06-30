// services/loginService.js
const usuarioService = require('./usuarioService');

const usuario = require('../models/usuarioModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "seu_segredo_super_secreto"; // ideal seria usar process.env

async function login(email, senha) {
    try {
        //1º passo: buscar o usuário pelo email
        //se não existir retorna erro
        //se existir, continua
        //2º passo: comparar a senha
        //senha digitada pelo usuario comparada com o hash armazenado no banco
        //se nao for igual, retorna erro
        //se for igual, continua
        //3º passo: criar o token
        // lógica necessária para a criação do token de autenticação
        //nome, email e tipo serão informados no payload
        // token de autenticação expira em 1 hora
        return
    } catch (error) {
        return { status: 400, erro: "Erro ao fazer login: " + error.message };
    }
}

module.exports = {
    login
};
