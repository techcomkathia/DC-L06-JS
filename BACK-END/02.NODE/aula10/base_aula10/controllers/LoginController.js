// usuará o serviço do usuario, com o objetivo de buscar um usuário pelo email
// o controller login irá receber o email e a senha do usuário, pela requisição e retornar um json com o status e o usuário encontrado, junto com o token de autenticação
const UsuariosServices = require('../services/UsuariosServices')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function login(req, res) {
    // usa o email para verificar se o usuário existe
    // caso o usuário exista, verifica a senha com o hash salvo no banco de dados
    // se a senha for correta, retorna o token de autenticação
    // o token deve conter um payload com o email do usuário e ser válido por 1h
}
