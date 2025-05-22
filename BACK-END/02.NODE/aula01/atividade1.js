// crie uma função que recebe um número, como parâmetro.
// A função irá pedir ao usuário uma informação e irá armazenar em um array. Esse processo será repetido o número de vezes passado como parâmetro da função.

// os elementos serão pedidos ao usuário pelo prompt. Deverá ser mostrado no console a quantidade de elementos armazenados no array.

// exporte o módulo e use-o no arquivo main
// npm install prompt-sync

const prompt = require('prompt-sync')()

function criarArray(n){
    let meuArray =[]
    
    for(let i = 0; i< n; i++){
        let valor = prompt(`Digite o ${i+1}º  valor (${i+1}/${n}): `)
        meuArray.push(valor)
    }

    console.log(meuArray.length)
    return meuArray
}

module.exports = criarArray