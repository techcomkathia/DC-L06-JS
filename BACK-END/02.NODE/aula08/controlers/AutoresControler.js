const AutoresServices = require('../services/AutoresServices')

const buscarTodosAutores = async (req, res) => {
    let todosAutores = await AutoresServices.buscarTodosAutores()

    if(todosAutores.erro) {return res.status(400).json(todosAutores)}

    return res.status(200).json({
        listaAutores: todosAutores,
        qtdAutores: todosAutores.length,
        status: 200
    })
}

//rota da api estruturada com o express
//app.get('/autores/:id', AutoresControler.buscarUmAutor)
async function buscarUmAutor(req, res) {
    //minhaUrl/autores/:id 
    //minhaUrl/autores/1    
    let id = req.params.id   

    let umAutor = await AutoresServices.buscarUmAutor(id)

    //sucesso
    if(umAutor.status === 200){
        return res.status(200).json(umAutor)
    }
    //erro
    else if (umAutor.erro){
        return res.status(400).json(umAutor)
    }
}


module.exports = {
    buscarTodosAutores,
    buscarUmAutor
}



