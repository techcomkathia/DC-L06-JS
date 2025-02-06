// para um produto :

let produto = {
    nome: 'Teclado',
    preco: 150,
    quantidade: 15,
    cor: 'preto',
    metodo: function(){ console.log('sou uma função') }
}

// mostre todas as informações deste produto no console com o loop for especifico para objetos

for(let propriedade in produto){
    console.log(`${propriedade}: ${produto[propriedade]}`)
}