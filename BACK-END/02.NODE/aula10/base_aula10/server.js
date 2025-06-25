const app = require('./app');
const port = process.env.PORT || 3000;
const conexaoBanco = require('./config/conexaoBanco');


async function iniciarServidor() {
  try {
    await conexaoBanco(); // aguarda a conexão com o banco
    // banco conectado com sucesso e segue para iniciar o servidor da api
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error.message);
    return  // encerra a aplicação se falhar
  }
}

iniciarServidor();