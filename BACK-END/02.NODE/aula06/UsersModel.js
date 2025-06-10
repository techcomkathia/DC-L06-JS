const sequelize = require('./configBanco')
const {DataTypes} = require('sequelize')

//definicao modelo 
const Users = sequelize.define('users', 
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        userName:{
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        password:{
            type: DataTypes.STRING(45),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }
)

module.exports = Users
