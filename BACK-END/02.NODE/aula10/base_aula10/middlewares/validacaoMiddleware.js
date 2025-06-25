function validacaoCategoria(req, res, next) {

    if(!req.body.nome || !req.body.descricao) {
        return res.status(400).json({ mensagem: 'Nome e descricao obrigatorio.'})
    }
    next()

}

module.exports = validacaoCategoria