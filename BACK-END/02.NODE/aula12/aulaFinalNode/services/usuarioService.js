// services/usuarioService.js
const Usuario = require('../models/usuarioModel');
const bcrypt = require('bcrypt');

async function getUsuarios() {
    try {
        const usuarios = await Usuario.findAll({
            attributes: ['id', 'nome', 'email', 'tipo']
        });
        return { status: 200, mensagem: "Lista de usuários encontrada", dados: usuarios };
    } catch (error) {
        return { status: 400, erro: "Erro ao buscar usuários: " + error.message };
    }
}

async function postUsuario(dados) {
    try {
        // Criptografa a senha
        const salt = 10;
        const hash = await bcrypt.hash(dados.senha, salt);
        

        const existeUsuario = await Usuario.findOne({ where: { email: dados.email } });


        if (existeUsuario) {
            return { status: 400, erro: "Email ja cadastrado" };
        }

        const novoUsuario = await Usuario.create({
            nome: dados.nome,
            email: dados.email,
            senha: hash,
            tipo: dados.tipo
        });
        return { status: 201, mensagem: "Usuário criado com sucesso", dados: {
            nome: novoUsuario.nome,
            email: novoUsuario.email,
            tipo: novoUsuario.tipo
        }};
    } catch (error) {
        return { status: 400, erro: "Erro ao criar usuário: " + error.message };
    }
}

module.exports = {
    getUsuarios,
    postUsuario
};
