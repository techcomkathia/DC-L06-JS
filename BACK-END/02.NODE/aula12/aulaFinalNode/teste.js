const loginService = require('./services/loginService');
const conexaoBanco = require('./config/conexaoBanco');

async function login(email, senha) {
    await conexaoBanco();
    return loginService.login(email, senha);
}

login('nina@example.com', '$2b$10$jCdC43yCvfCgM7h.wxU8qO9KcS5Db8CSWu8eEobRBH4VSAIMcin7G').then((retorno) => console.log(retorno));