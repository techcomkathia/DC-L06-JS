// services/produtoService.js
const Produto = require('../models/produtoModel');

async function getProdutos() {

    return
    
}

async function getProdutoId(id) {
    return
}

async function postProduto(dados) {

    const {nome, preco, quantidade } = dados
    try{
        const novoProduto = await Produto.create({
            nome,
            preco,
            quantidade
        })
        
        if(!novoProduto){
            return {status: 400, erro: "Erro ao criar produto"}
        }
        return {status: 201, mensagem: "Produto criado com sucesso", dados: novoProduto}
    }
    catch(error){
        return {status: 400, erro: "Erro ao criar produto: " + error.message}
    }
   
}

module.exports = {
    getProdutos,
    getProdutoId,
    postProduto
};
