//  a camada se serviços realiza as operações a partir do modelo, definindo as funções que poderão ser utilizadas pelo controlador

const Categorias = require('./CategoriasModel')

function CriarCategoria (nome) {

    if(!nome){
        return(
            {
                message: 'O campo nome deve ser preenchido',
                status: 400
            }
        )
    }

    Categorias.create({
        nome:nome
    }).then(() =>{console.log('Categoria criada com sucesso')
        return(
            {
                message: 'Categoria criada com sucesso',
                status: 200
            }
        )
    } )
    .catch(() =>{
        console.log('Erro ao criar categoria')
        return(
            {
                message: 'Erro ao criar categoria',
                status: 500
            }
        )
    } )
}

function BuscarCategorias() {
    Categorias.findAll().then((result) => {

        

        console.log(result)
        return ({
            categorias: result,
            status: 200
        })
    }).catch(() => {
        console.log('Erro ao buscar categorias')
        return ({
            message: 'Erro ao buscar categorias',
            status: 500
        })
    })
}

function BuscarUmaCategoria(id) {
    Categorias.findByPk(id).then((result) => {

        if(!result){
            console.log('Categoria nao encontrada')
            return ({
                message: 'Categoria nao encontrada',
                status: 404
            })
        }
        console.log(result)
        return ({
            categoria: result,
            status: 200
        })
    }).catch(() => {
        console.log('Erro ao buscar categoria')
        return ({
            message: 'Erro ao buscar categoria',
            status: 500
        })
    })
}


// CriarCategoria('Romance')
// CriarCategoria('Terror')
// CriarCategoria('Aventura')

// BuscarCategorias()

BuscarUmaCategoria(111)

module.exports = {
    CriarCategoria
}