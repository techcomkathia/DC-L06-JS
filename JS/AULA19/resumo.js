let pessoa = {
    nome: 'Ana', //propriedade
    idade: 12, //propriedade
    endereco: 'rua'
}

console.log(pessoa)
// atualizar um valor
pessoa.nome = 'Ana Silva'
console.log(pessoa)

// adicionar uma nova propriedade
pessoa.senha ='1234'
console.log(pessoa)
console.log(pessoa.senha)

let propriedades = Object.keys(pessoa) //retorna um array com as propriedades
console.log(propriedades)

let valores = Object.values(pessoa) 
//retorna um array com os valores
console.log(valores)

let pesquisa = valores.includes(12)
// verifica se dentro do array existe um valor ( que foi passado com parâmetro)
console.log(pesquisa)

let produtos = [
    {nome:'teclado', preco: 150, quantidade: 15, cor: 'preto', marca: 'logitech'},
    {nome:'mouse', preco: 50, quantidade: 20, cor: 'preto', marca: 'logitech'},
    {nome:'headset', preco: 100, quantidade: 10, cor: 'preto', marca: 'logitech'}
]

console.log(produtos)
console.log(produtos[1].preco)

// atualização de um valor de um objeto dentro de um array
console.log(produtos)
produtos[0].preco = 400
produtos[0].desconto = 15
console.log(produtos)
// deletar a marca do terceiro produto
delete produtos[2].marca

console.log(produtos)
produtos[3] = {nome: 'flor'}
console.log(produtos)
