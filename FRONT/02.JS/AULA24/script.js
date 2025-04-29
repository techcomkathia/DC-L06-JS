
// fetch consumo de API, retorna sempre um promisse ( trabalha assíncronamente)

/*fetch('url')
    .then(resposta => {
        //faz alguma coisa com a resposta
    })
    .then( objeto => {
        //faz alguma coisa com o objeto
    })
    .catch(erro => {
        //faz alguma coisa com o erro
        // tratar o erro para que ele não pare o programa
    })*/

// consumir a api do via cep e mostrar o nome da rua no console

fetch('https://viacep.com.br/ws/60711055/json/')//promisse
    .then((reposta) => {
        // converter a resposta em OBJETO javaScript
        console.log(reposta) // objeto promisse
        return reposta.json() //convertendo para OBJETO
    }).then((objeto) => {
        console.log(objeto.cep)
    }).catch((erro) => {
        console.log('Deu ruim: '+ erro.message)
    })


console.log('log 1') //sincrono
console.log('log 2') //sincrono

// faça o consumo da API via cep e mostre as informações do seu endereço no console formatadas no seguinte modelo:
//Rua ${logradouro}, ${bairro}, ${localidade} - ${uf}