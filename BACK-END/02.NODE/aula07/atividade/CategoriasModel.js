const sequelize = require('./configBancoBiblioteca')
const {DataTypes} = require('sequelize')

const Categorias = sequelize.define('categorias', {
    id_categoria:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING(50),
        allowNull: false
    }
    
}
,{
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
)

sequelize.sync({alter: true})
.then(() => console.log('Tabelas sincronizadas com sucesso'))
.catch(() => console.log('Erro ao sincronizar as tabelas'))

module.exports = Categorias