// app.js
const express = require('express');
const app = express();

app.use(express.json())

const produtoRoutes = require('./routes/produtoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const loginRoute = require('./routes/loginRoute');

// Rotas
app.use('/produtos', produtoRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/login', loginRoute);

module.exports = app;
