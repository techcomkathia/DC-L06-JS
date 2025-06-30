// config/banco.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'usuario_do_banco', 'senha_do_banco', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
