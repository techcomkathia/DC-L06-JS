const palavrinha = 'palavra'

console.log(typeof(palavrinha))
console.log(palavrinha.length)

let objeto = {
    nome: 'Cleitinho',
    idade: 12,
    falar: ()=>{
        console.log('Olá Mundo!')
    }
}

console.log(objeto.idade)
objeto.falar()


//converter objeto para json

let objetoJson = JSON.stringify(objeto)
console.log(objetoJson)
