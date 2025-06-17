const sequelize = require('../configBanco')
const {DataTypes} = require('sequelize')

const Autores = sequelize.define('autores', {
    id_autor:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nacionalidade:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
    
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
   
})


module.exports = Autores