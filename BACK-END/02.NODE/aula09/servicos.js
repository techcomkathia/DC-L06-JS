// cadastrar usuario
const { error } = require('console')
let usuarios = require('./modelo')
const byc = require('bcrypt')


async function cadastrarUsuario(objeto){

    if(objeto.senha != objeto.confirmaSenha){
        console.log('Senhas diferentes')

        return {erro: 'Senhas diferentes'}
    }

    if(usuarios.find(user => user.email == objeto.email)){
        console.log('Email ja cadastrado')
        return {erro: 'Email ja cadastrado'}
    }

    let senhaParaBancoDeDados = await byc.hash(objeto.senha, 10)

    //cadastrar o usuario no "banco de dados"

    usuarios.push({ 
        nome: objeto.nome,
        email: objeto.email, 
        senha: senhaParaBancoDeDados }
    )
    console.log('Usuário cadastrado com sucesso')
    return {sucesso: 'Usuário cadastrado com sucesso'}   
}

// para criptografar a senha
// byc.hash(senha, qtdSaltRounds, (err, hash) => {})

//para comparar a senha com a criptografia
// byc.compare(senhaDigitada, hash, (err, res) => {})