// models/usuarioModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/banco');

const Usuario = sequelize.define('Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('adm', 'cliente'),
        allowNull: false 
    }},
    {
        timestamps: false
    });
module.exports = Usuario;
