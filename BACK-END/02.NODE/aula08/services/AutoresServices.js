// estabelecer as regras de negócio e executar as operações no modelo

const Autores = require('../models/AutoresModel')


async function buscarTodosAutores(){
    
    try{
        let todosAutores = await Autores.findAll()

        return {
            DADOS: todosAutores
        } 
    }
    catch(erro){
        console.log(erro)

        return {
            erro: erro.message
        }
    }
    
}

async function buscarUmAutor(id){
    
    try{
        let umAutor = await Autores.findByPk(id)

        return umAutor 
    }
    catch(erro){
        console.log(erro)
    }
    
}


async function criarUmAutor(nome, nacionalidade){
    try{
        Autores.create({
            nome: nome,
            nacionalidade: nacionalidade
        })
    }
    catch(erro){
        console.log(erro)
        return ({
            erro: erro.message
        })
    }
    
    
}


async function atualizarUmAutor(id, autor){
    
}


async function deletarUmAutor(id){
    
}

module.exports = {
    buscarTodosAutores,
    buscarUmAutor,
    criarUmAutor,
    atualizarUmAutor,
    deletarUmAutor
}