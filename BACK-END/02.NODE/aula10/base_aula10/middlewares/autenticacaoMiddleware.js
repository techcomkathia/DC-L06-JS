//recebe um token da requisição e verifica se ele é valido e caso seja válido passa para a proxima funcao
const jwt = require('jsonwebtoken')


async function autenticacaoMiddleware(req, res, next) {

    const token = req.headers.authorization
    console.log(token)
   
    if(!token) {
        return res.status(401).json({ mensagem: 'Token nao informado'})
    }   

    try {
        const tokenInformado = token.split(' ')[1] //separar o token do 'Bearer '
        //Bearer aksjalsjaldjsdlhasfdhaisudhbc.sklcajlsdjkal.sdjlkasdjlaksjalsjaldjsdlhasfdhaisudhbcsklcajlsdjkalsdjlkasdjl
        const ehValidoToken = jwt.verify(tokenInformado, 'senhaSecreta' )

        if(ehValidoToken) {
            next()
        }

        else{
            return res.status(401).json({ mensagem: 'Token invalido. Faça o login novamente'})
        }

    }   
    catch(erro){

        return res.status(500).json({ mensagem: 'erro interno', erro: erro.message})

    }

}

module.exports = autenticacaoMiddleware