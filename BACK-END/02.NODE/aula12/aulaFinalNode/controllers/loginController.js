//importar service para login
const login = require('../services/loginService');

async function postLogin(req, res) {

    const {email, senha} = req.body;

    try {
        const resultado = await login(email, senha);
        if(resultado.erro) {
            return res.status(resultado.status).json(resultado);
        }
        res.status(resultado.status).json(resultado);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
    
}


module.exports = postLogin