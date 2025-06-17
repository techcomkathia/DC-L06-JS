const autoresService = require('./services/autoresServices')
const sequelize = require('./configBanco')

sequelize.authenticate()
.then(() =>{console.log('Conectado ao banco de dados')
    console.log('Tabelas sincronizadas com sucesso')
    sequelize.sync({alter: true})
} )
.catch(() => console.log('Erro ao conectar ao banco de dados'))

//testar o serviço de autores
// autoresService.buscarTodosAutores()
//     .then(autores => console.log(autores))
//     .catch(erro => console.log(erro))

// criar um autor
autoresService.criarUmAutor('joao', 'brasileiro')
    .then(autor => console.log(autor))
    .catch(erro => console.log(erro))