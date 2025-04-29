// para o array de vendas do CleitinhoEletro do ano de 2024, exiba o total vendido nos 12 meses. Utilize reduce para isso.

let vendas = [ 20000, 30000, 10000, 15000, 25000, 50000, 40000, 30000, 20000, 10000, 15000, 25000]
let vendasAnosAnteriores = 150000000

// total2024

// let novaVariável = arrayReferencia.reduce((acumulador, itemArray) => {
// aplicação da função de callback e retorno do valor calculado   
//})

let funcaoCallback = (acumulador, itemArray) => {
    return acumulador + itemArray
}

let total2024 = vendas.reduce(funcaoCallback)

let totalGeral = vendas.reduce(funcaoCallback, vendasAnosAnteriores)