// usuará o serviço do usuario, com o objetivo de buscar um usuário pelo email
// o controller login irá receber o email e a senha do usuário, pela requisição e retornar um json com o status e o usuário encontrado, junto com o token de autenticação
const UsuariosServices = require('../services/UsuariosServices')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function login(req, res) {
    // usa o email para verificar se o usuário existe
    const {email,senha} = req.body

    try{

        if(!email || !senha){
            return res.status(400).json({status: 400, erro: 'Email ou senha nao informados'})
        }

        const retornoServicoBanco = await UsuariosServices.buscarUmUsuarioEmail(email)

        if(!retornoServicoBanco.dados){
            //erro, o usuario não foi encontrado no banco
            return res.status(404).json({status: 404, erro: 'Usuário nao encontrado'})
        }

        //o usuario existe e a senha vai ser verificada
        const senhaUsuarioBanco = retornoServicoBanco.dados.senha
        const ehSenhaCorreta = await bcrypt.compare(senha, senhaUsuarioBanco)

        if(!ehSenhaCorreta){
            //erro para senha incorreta
            return res.status(401).json({status: 401, erro: 'Senha incorreta'})
        }

        //criação do token para autenticação das rotas protegidas
        //payload
        //senhaSecreta
        //objeto de configuração com o tempo de validade do token
        const token = jwt.sign({email: email, info: 'usuario autenticado com senha'}, 'senhaSecreta', {expiresIn: '1h'})

        //configuração do retorno se tudo der certo
        return res.status(200).json({status: 200, sucesso: 'Usuário autenticado com sucesso', token: token})
    } 

    catch(erro){
        return res.status(500).json({status: 500, erro: erro.message})
    }

    
    // caso o usuário exista, verifica a senha com o hash salvo no banco de dados
    // se a senha for correta, retorna o token de autenticação
    // o token deve conter um payload com o email do usuário e ser válido por 1h
}

module.exports = {
    login
}
