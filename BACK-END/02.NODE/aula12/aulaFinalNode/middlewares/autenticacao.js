
const jwt = require('jsonwebtoken');
const SECRET_KEY = "2"; // ou process.env.SECRET_KEY

function autenticacao(req, res, next) {
    const authHeader = req.headers.authorization; // "Bearer <token>"

    if (!authHeader) {
        return res.status(401).json({ erro: "Token não informado" });
    }

    // Separar "Bearer" do token
    const tokenUsuario = authHeader.split(' ')[1];

    if (!tokenUsuario) {
        return res.status(401).json({ erro: "Token não informado" });
    }

    try {
        const payload = jwt.verify(tokenUsuario, SECRET_KEY);
        // Se passou, armazena payload no req para usar depois
        req.usuarioLogado = payload;
        next();
    } catch (error) {
        return res.status(401).json({ erro: "Token inválido" });
    }
}

module.exports = autenticacao;
