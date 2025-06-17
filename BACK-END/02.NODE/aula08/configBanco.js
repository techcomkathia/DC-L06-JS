const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('biblioteca', 'root', 'km2015km', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize