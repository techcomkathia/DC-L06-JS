const sequelize = require('./configBanco')
const Users = require('./UsersModel')

function criarUser(nome, nickName, senha, email) {
    Users.create({
        name: nome,
        userName: nickName,
        password: senha,
        email: email
    })
}


sequelize.sync({alter: true})
.then(() => criarUser('Cleiton', 'Cleitinho', '1234', 'cleitinho@gatolaranja.com'))
.catch(() => console.log('Erro ao criar o user'))
