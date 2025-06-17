const app = require('./app')
const sequelize = require('./configBanco')

//o servidor do expresstambém vai inicializar a conexão com o banco e sincronizar as tabelas
app.listen(3000, 
    ()=>{
    console.log('servidor rodando na porta 3000. http://localhost:3000')
        
    //conxeão ao banco
    sequelize.authenticate() //método assíncrono
    .then(() => {
            console.log('Conectado ao banco de dados')
            sequelize.sync() //{alter: true}
            console.log('Tabelas sincronizadas com sucesso')
        }
    ).catch(() => console.log('Erro ao conectar ao banco de dados'))
})