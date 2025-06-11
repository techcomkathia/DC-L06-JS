const sequelize = require('./configBancoBiblioteca')
const {DataTypes} = require('sequelize')

const Autores = require('./AutoresModel')
const Categorias = require('./CategoriasModel')

const Livros = sequelize.define('livros', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    autor_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Autores,
            key: 'id'
        }
    },
    categoria_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categorias,
            key: 'id'
        }
    }
    
})


//um autor pode ter vários livros
Autores.hasMany(Livros)

//uma categoria pode ter vários livros
Categorias.hasMany(Livros)

//um livro pertence a um autor
Livros.belongsTo(Autores)

//um livro pertence a uma categoria
Livros.belongsTo(Categorias)

module.exports = Livros