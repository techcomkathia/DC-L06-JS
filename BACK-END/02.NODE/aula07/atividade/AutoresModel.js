const sequelize = require('./configBancoBiblioteca')
const {DataTypes} = require('sequelize')

const Autores = sequelize.define('autores', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nacionalidade:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
    
})

module.exports = Autores