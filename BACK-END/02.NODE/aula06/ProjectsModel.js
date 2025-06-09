const sequelize = require('./configBanco') // sequelize configurado para nosso banco de dados
const {DataTypes} = require('sequelize')

const Projects = sequelize.define('projects', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    description:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    date:{
        type: DataTypes.DATE
    }
})