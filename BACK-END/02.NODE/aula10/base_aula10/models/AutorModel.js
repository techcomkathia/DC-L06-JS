const sequelize = require('../config/banco')
const { DataTypes } = require('sequelize')

//definição do modelo autor

const Autor = sequelize.define('Autor', {
id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
},
nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
},
nacionalidade: {
    type: DataTypes.STRING(50),
},
}, {
tableName: 'autores',
timestamps: true,
createdAt: 'createdAt',
updatedAt: 'updatedAt',
});


module.exports = Autor