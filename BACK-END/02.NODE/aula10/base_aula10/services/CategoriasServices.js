// todas as regras de negócio
// criação de uma categoria, listagem das categorias, edição de uma categoria, exclusão de uma categoria

const CategoriasModel = require('../models/CategoriaModel') // importando o modelo de categorias
const express = require('express')



//criação da função do primeiro serviço

async function getCategorias() {
    let categorias = await CategoriasModel.findAll() //método assíncrono para buscar todas as categorias
    console.log(categorias.length)
    if(!categorias){
        return({
            status:404,
            message: 'Nenhuma categoria encontrada'
        })}

    return({
        status:200,
        dados: categorias
    })
}

async function postCategoria(categoria){
    const categoriaCriada = await CategoriasModel.create({nome: categoria.nome, descricao: categoria.descricao})
    try{
        return({
            status:200,
            dados: categoriaCriada
        })
    }
    catch(erro){
        return({
            status:500,
            message: 'Erro ao criar categoria'
        })
    }
}


module.exports = {
    getCategorias,
    postCategoria
}