// services/loginService.js
const usuarioService = require('./usuarioService');

const usuario = require('../models/usuarioModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "seu_segredo_super_secreto"; // ideal seria usar process.env

async function login(email, senha) {
    try {
        //1º passo: buscar o usuário pelo email

        const usuario = await usuario.findOne({ where: { email: email } });

        if(!usuario) {
          {
            return { status: 404, erro: "Usuário nao encontrado" };
          }
        }

        if(!bcrypt.compare(senha, usuario.senha)) {
            //2º passo: comparar a senha
        // ----------- bcrypt.compare(senhaDigitada, hashArmazenadoNoBanco)--> retorna um boolean
        //senha digitada pelo usuario comparada com o hash armazenado no banco
        //se nao for igual, retorna erro
        {
            return { status: 401, erro: "Senha incorreta" };
        }
        }
        //se a senha digitada for igual ao hash armazenado no banco, continua
        const payload = {
            nome: usuario.nome,
            email: usuario.email,
            tipo: usuario.tipo
        }
        //3º passo: criar o token
        // lógica necessária para a criação do token de autenticação
        // jwt.sign(payload, palavraSecreta, options) ---> options: {expiresIn: '1h'}
        //nome, email e tipo serão informados no payload
        // token de autenticação expira em 1 hora
        const token = jwt.sign(payload, SECRET_KEY, {expiresIn: '1h'});
  
        return {
            status: 200,
            token: token
        }
    } catch (error) {
        return { status: 400, erro: "Erro ao fazer login: " + error.message };
    }
}

module.exports = {
    login
};
