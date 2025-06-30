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
        dados.senha = hash;

        const novoUsuario = await Usuario.create(dados);
        return { status: 201, mensagem: "Usuário criado com sucesso", dados: {
            id: novoUsuario.id,
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
