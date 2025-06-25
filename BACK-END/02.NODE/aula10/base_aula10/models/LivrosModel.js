const sequelize = require('../config/banco') // importando o sequelize do arquivo conexaoBanco.js
const { DataTypes } = require('sequelize')
const Autor = require('./AutorModel')
const Categoria = require('./CategoriaModel')

  const Livro = sequelize.define('Livro', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    publicado_em: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    estoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categorias',
        key: 'id',
      },
    },
    autor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'autores',
        key: 'id',
      },
    },
  }, {
    tableName: 'livros',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  })



/* Relacionamentos
    Uma Categoria possui muitos Livros
        (1:N entre Categoria e Livro)
    Um Autor pode ter escrito vários Livros
        (1:N entre Autor e Livro)*/

Categoria.hasMany(Livro) //um para muitos
Autor.hasMany(Livro) //um para muitos
Livro.belongsTo(Categoria) //muitos para um
Livro.belongsTo(Autor) //muitos para um

module.exports = Livro