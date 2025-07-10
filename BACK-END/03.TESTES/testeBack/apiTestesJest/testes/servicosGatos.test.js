const conexaoBanco = require('../src/config/bancoDados')
const {conectarBanco} = conexaoBanco
const servicosGatos = require('../src/services/GatoServices')

test('deve retornar todos os gatos', async () => {
    const conexao = await conectarBanco() //estar conectado ao banco de dados
    const gatos = await servicosGatos.getGatos() //executar o servico e retornar os gatos
    console.log(gatos)
    expect(gatos).toHaveProperty('statusCode') //verificar se o status code e 200
    expect(gatos.dados).toBeGreaterThan(0)// verificar se a quantidade de gatos e maior que 0
})