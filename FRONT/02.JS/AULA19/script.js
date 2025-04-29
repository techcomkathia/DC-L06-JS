let gatoObjeto = {
    nome: 'Cleitinho', //propriedade
    cor: 'laranja', //propriedade
    idade: 12, //propriedade
    tutor : 'Marina',//propriedade
    endereco : undefined, //propriedade
    miar:function(){console.log('miau miau')} // método
}
// muitas informações de um mesmo elemento

/*
console.log(gatoObjeto)
console.log(gatoObjeto.nome)
gatoObjeto.miar()
console.log(gatoObjeto)
gatoObjeto.endereco = 'Rua dos Bobos, 0'
// atualizar uma informação para uma propriedade já existente
console.log(gatoObjeto)
gatoObjeto.novaChave = 'nova informação'
// criação de uma nova propriedade/ método
console.log(gatoObjeto)
// { propriedade: valor, propriedade2: valor2 , [...]} */

console.log(gatoObjeto)
// DELETAR UMA PROPRIEDADE
delete gatoObjeto.tutor
console.log(gatoObjeto)

// Verificar as propriedades de um objeto
let propriedades = Object.keys(gatoObjeto)
console.log(propriedades)


// Verificar os valores de um objeto
let valores = Object.values(gatoObjeto)
console.log(valores)

