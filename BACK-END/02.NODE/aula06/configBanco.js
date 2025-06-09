const {Sequelize} = require('sequelize')
const {DataTypes} = require('sequelize')


//a instancia do banco de dados
//configurando o banco

//const sequelize = new Sequelize('nomeBanco', 'usuarioBanco', 'senhaUsuario', 
// {host:'localBanco', dialect:'sgbd'})
const sequelize = new Sequelize('projetosLive06', 'root', 'km2015km', 
    {
        host:'localhost',
        dialect:'mysql'
    }
)

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

//conexão ao banco
sequelize.authenticate() //método assíncrono
.then(() => {
        console.log('Conectado ao banco de dados')
        sequelize.sync()
        console.log('Tabelas sincronizadas com sucesso')
    }
).catch(() => console.log('Erro ao conectar ao banco de dados'))

module.exports = sequelize