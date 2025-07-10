//configurar o acesso ao env
require('dotenv').config({ path: '../.env' });

console.log(process.env.DB_NAME);