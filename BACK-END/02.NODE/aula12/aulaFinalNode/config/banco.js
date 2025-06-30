// config/banco.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aulaFinalNode', 'root', 'km2015km', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
