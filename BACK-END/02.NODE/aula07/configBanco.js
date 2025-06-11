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


//conexão ao banco
sequelize.authenticate() //método assíncrono
.then(() => {
        console.log('Conectado ao banco de dados')
        sequelize.sync()
        console.log('Tabelas sincronizadas com sucesso')
    }
).catch(() => console.log('Erro ao conectar ao banco de dados'))

module.exports = sequelize