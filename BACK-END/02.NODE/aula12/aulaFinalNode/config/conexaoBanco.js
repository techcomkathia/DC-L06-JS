// config/conexaoBanco.js
const sequelize = require('./banco');

async function conexaoBanco() {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync({
            alter: true,
            logging: false
        });
        console.log('✅ Modelos sincronizados com o banco de dados.');

    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
}

module.exports = conexaoBanco;
