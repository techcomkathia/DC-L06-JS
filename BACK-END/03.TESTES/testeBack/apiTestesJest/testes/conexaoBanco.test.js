const {conectarBanco} = require('../src/config/bancoDados')

//objetivo do teste, verificar se o banco de dados pode ser conectado corretamente ou nao
//teste unitario - testa apenas a unidade de uma função

test('deve conectar ao banco de dados', async () => {
    const conexao = await conectarBanco() //obj
    expect(conexao.ok).toBe(true) //se o objeto tem a propriedade ok com o valor true

    //verificar se a propriedade msg tem o valor 'Conexão bem-sucedida com o banco de dados.'
    expect(conexao.msg).toBe('Conexão bem-sucedida com o banco de dados.')
})

//test(descricao, callback)