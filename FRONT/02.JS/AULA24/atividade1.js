// mostrar um texto formatado do cep consultado no viacep api
let cepnumero=prompt('Digite um cep')

fetch(`https://viacep.com.br/ws/${cepnumero}/json/`)//promisse 
.then((resposta)=>{
    // console.log(resposta)
    return resposta.json() //converte o corpo da resposta (json)para Objeto JavaScript
})
.then((obj)=>{
    console.log(obj)
    console.log(`Cep: ${obj.cep}`)
    console.log(`Logradouro: ${obj.logradouro}`)
    console.log(`Complemento: ${obj.complemento}`)
    console.log(`Bairro: ${obj.bairro}`)
    console.log(`Localidade: ${obj.localidade}`)
    console.log(`Estado: ${obj.uf}`)
})
.catch((erro)=>{
    console.log(`O cep passado nao foi encontrado: ${cepnumero}`)
})

console.log('Outra função')