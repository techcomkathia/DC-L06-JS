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
        },
        novacoluna:{
            type: DataTypes.STRING(45),
            allowNull: true
        },
         novacoluna2:{
            type: DataTypes.STRING(45),
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
       timestamps: false,
       tableName: 'users'
    }
)

module.exports = Users
