// server.js
const app = require('./app');
const conexaoBanco = require('./config/conexaoBanco');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} `);
    conexaoBanco();
});
