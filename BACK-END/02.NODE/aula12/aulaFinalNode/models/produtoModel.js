// models/produtoModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/banco');

const Produto = sequelize.define('Produtos', 
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    },
    {
        timestamps: false
    });

module.exports = Produto;
