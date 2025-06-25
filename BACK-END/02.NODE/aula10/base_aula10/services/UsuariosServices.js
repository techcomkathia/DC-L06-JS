// buscarUmUsuarioEmail
const Usuario = require('../models/UsuarioModel') // importando o model Usuario

//realiza um findOne no banco de dados para buscar um usuário pelo email
//utilize a clausula where para buscar o usuário pelo email
//caso o usuario exista, retorne : {status: 200, usuario: usuarioEncontrado}
//caso o usuario nao exista, retorne : {status: 404, erro: 'Usuário nao encontrado'}
//caso ocorra algum erro, retorne : {status: 500, erro: erro}

async function buscarUmUsuarioEmail(email){
    try{
        const usuario = await Usuario.findOne({where: {email}})

   
        if(usuario){
            return{
                status: 200,
                dados: usuario
            }
        }

        else{
            return{
                status: 404,
                message: 'Usuário nao encontrado'   
            }
        }
    }
       
    catch(erro) {
        return{
            status: 500,
            message: erro
        }
    }
}



// criarUmUsuario 

module.exports = {
    buscarUmUsuarioEmail
}