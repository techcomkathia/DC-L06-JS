function validacaoUsuario(req, res, next){
//validar se existe os atributos ['id', 'nome', 'email', 'tipo', 'senha', 'confirmSenha']
    const{nome, email, senha, confirmSenha, tipo} = req.body;

    if(!nome || !email || !senha || !confirmSenha || !tipo){
        return res.status(400).json({ erro: "Todos os campos obrigatórios devem ser preenchidos"});
    }

    if(senha !== confirmSenha){
        return res.status(400).json({ erro: "As senhas devem ser iguais"});
    }

    next()
    
}

module.exports = validacaoUsuario