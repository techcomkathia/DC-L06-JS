// controllers/produtoController.js
const produtoService = require('../services/produtoService');

async function getProdutos(req, res) {
    const resultado = await produtoService.getProdutos();
    if (resultado.erro) {
        return res.status(400).json(resultado);
    }
    return res.status(resultado.status).json({ mensagem: resultado.mensagem, dados: resultado.dados });
}

async function getProdutoId(req, res) {
    const { id } = req.params;
    const resultado = await produtoService.getProdutoId(id);

    if (resultado.erro) {
        return res.status(resultado.status).json({ erro: resultado.erro });
    }
    return res.status(resultado.status).json({ mensagem: resultado.mensagem, dados: resultado.dados });
}

async function postProduto(req, res) {
    const dados = req.body;
    const resultado = await produtoService.postProduto(dados);

    if (resultado.erro) {
        return res.status(resultado.status).json({ erro: resultado.erro });
    }
    return res.status(resultado.status).json({ mensagem: resultado.mensagem, dados: resultado.dados });
}

module.exports = {
    getProdutos,
    getProdutoId,
    postProduto
};
