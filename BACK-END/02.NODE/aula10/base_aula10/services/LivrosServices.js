const express = require('express')
const app = express()
const LivrosModel = require('../models/LivrosModel')

//middleware de recebimento de json
app.use(express.json())// permite que o express compreenda o body da requisição no formato json

async function getLivros(){
    //buscar todos os livros
    try{
        let livros = await LivrosModel.findAll()

        return({
            status: 200,
            dados: livros
        })
    
    }
    catch(erro){
        return({
            status: 500,
            message: 'Erro ao buscar livros'
        })
    }
    
}

async function postLivro(livro) {
    
    try{
        //verificar se o livro existe
        const livroPesquisa = await LivrosModel.findOne({where:{titulo:livro.titulo}})

        //se o livro não existir, verificar se todos os campos foram preenchidos, se todos forem preenchidos, criar o livro
        if(!livroPesquisa){
            const livroCriado = await LivrosModel.create(
                {
                    titulo:livro.titulo,
                    isbn:livro.isbn,
                    preco:livro.preco,
                    publicado_em:livro.publicado_em,
                    estoque:livro.estoque,
                    categoria_id:livro.categoria_id,
                    autor_id:livro.autor_id
                }
            )

            return({
                status: 200,
                dadosCriados: livroCriado
            })
        }
        else{
            return({
                status: 400,
                message: 'Livro ja cadastrado'
            })
        }        //caso contrário, retornar uma mensagem de erro

        
    }
    catch(erro){
        return(
            {
                message: erro,
                status: 500,
                erro: 'Erro ao criar o livro'
            }
        )
    }
}



module.exports = {
    getLivros,
    postLivro
}