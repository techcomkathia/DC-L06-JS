// utiliza o serviço tendo acesso aos objetos de requisição e resposta
//executa o serviço e capta o retorno devolvendo uma resposta ao navegador
const CategoriasServices = require('../services/CategoriasServices')
const express = require('express')





//controlador para buscar todas as categorias
//se sucesso retorna um json com as categorias e um status 200
//se erro retorna um json com a mensagem de erro e um status 500
async function buscarCategorias(req, res) {
      
    //validações e execuções de serviços
    let categorias = await CategoriasServices.getCategorias()
     //método assíncrono para buscar todas as categorias
     if(categorias) {
        res.status(200).json(categorias)
       
     } else {
        return res.status(500).json({ mensagem: 'Erro ao buscar categorias'}) //se erro retorna um json com a mensagem de erro e um status 500
     }
    
    
}

//controlador para criar uma categoria

async function criarCategoria(req, res) {
    //validação sendo feita no middleware
    try{
        const {nome, descricao} = req.body

        const categoriaCriada = await CategoriasServices.postCategoria({nome, descricao}) 
        res.status(200).json(categoriaCriada)
    }   


    catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao criar categoria', erro: erro.message})
    }
}
// primeiro realiza a validação dos dados (objeto com nome e descricao)
//se passar pela validação executa o serviço para criar a categoria, retornando um json com a categoria criada e um status 200
//se não passar pela validação retorna um json com a mensagem de erro e um status 400


module.exports = {
    buscarCategorias,
    criarCategoria
}