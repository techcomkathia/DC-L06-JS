const {Sequelize} = require('sequelize')

// instancia do sequelize
const sequelize = new Sequelize('DESAFIO_LIVRARIA_LIVE06', 'root', 'km2015km', {
    host: 'localhost', //local do banco (localhost)
    dialect: 'mysql' // SGBD do banco
})


module.exports = sequelize