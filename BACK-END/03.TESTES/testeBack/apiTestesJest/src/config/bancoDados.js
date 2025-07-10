const Sequelize = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize(process.env.DB_NAME,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//       host: process.env.DB_HOST,
//       port: process.env.DB_PORT,
//       dialect: process.env.DB_DIALECT,
//       logging: false, // Para desativar logs SQL no console (opcional)
//   }
// );

const sequelize = new Sequelize('api_gatos',
  'root', 'km2015km', 
  {
      host: '127.0.0.1',
      port: '3306',
      dialect: 'mysql',
      logging: false, // Para desativar logs SQL no console (opcional)
  }
);

async function conectarBanco(){
    try {
        await sequelize.authenticate();
        console.log('Conexão bem-sucedida com o banco de dados.')
        return({ok: true, msg: 'Conexão bem-sucedida com o banco de dados.'})
        // console.log(process.env.ACESSOBANCO);
      } catch (error) {
        // console.log(process.env.ACESSOBANCO)
        console.error('Não foi possível conectar ao banco de dados:', error);
        return({ok: false, msg: 'Erro ao conectar ao banco de dados.'})
      }
}

module.exports = {conectarBanco, sequelize}; // Exportando o sequelize;

//COMANDO PARA EXECUTAR O ARQUIVO 
//node --env-file=../.env server.js

