const jwt = require('jsonwebtoken');
const SECRET_KEY = "seu_segredo_super_secreto"; // também pode vir de process.env

function autenticacao(req, res, next) {
    const authHeader = req.headers.authorization; //"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6..."
    const tokenUsuario = authHeader.split(' ')[1]; // ["Bearer", "eyJhbGciOiJIUzI1NiIsInR5cCI6..."]


    
}

module.exports = autenticacao;
