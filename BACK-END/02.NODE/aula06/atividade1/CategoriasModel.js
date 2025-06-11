const sequelize = require('./configBancoBiblioteca')
const {DataTypes} = require('sequelize')

const Categorias = sequelize.define('categorias', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
    
})

module.exports = Categorias