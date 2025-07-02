const express = require('express');
const rotaLogin = express.Router();

// Importar controller
const loginController = require('../controllers/loginController');


// Rota POST 
rotaLogin.post('/', loginController);
module.exports = rotaLogin;
