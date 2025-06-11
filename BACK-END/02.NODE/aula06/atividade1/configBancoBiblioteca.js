const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('biblioteca', 'root', 'km2015km',{
    host: 'localhost',
    dialect: 'mysql'
}
);


sequelize.authenticate()
.then(() =>{console.log('Conectado ao banco de dados')
    sequelize.sync({alter: true})
    console.log('Tabelas sincronizadas com sucesso')
} )
.catch(() => console.log('Erro ao conectar ao banco de dados'))

module.exports = sequelize;