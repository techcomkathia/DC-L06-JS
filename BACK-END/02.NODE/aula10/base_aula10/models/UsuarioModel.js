const sequelize = require('../config/banco') // importando o sequelize do arquivo conexaoBanco.js

const { DataTypes } = require('sequelize')

//definição do modelo usuario
const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    senha: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  }, {
    tableName: 'usuarios',
    timestamps: true,           // ativa createdAt e updatedAt
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });

module.exports = Usuario