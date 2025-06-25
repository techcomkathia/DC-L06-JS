const sequelize = require('../config/banco')
const {DataTypes} = require('sequelize')

const Categoria = sequelize.define('Categoria', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: 'categorias',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });

module.exports = Categoria