let pessoas = [
    {nome:'Ana', idade: 12},
    {nome:'Cleitinho', idade: 12},
    {nome: 'Clara', idade:50},
    {nome: 'Pedro', idade: 18},
    {nome: 'Maria', idade: 28}
]

let funcaoFiltro = (pessoa) => {
    if(pessoa.idade >= 60){
        //return true
        return pessoa
    }
}


let pessoasMaiorIdade = pessoas.filter(funcaoFiltro)

console.log(pessoasMaiorIdade)
console.log(pessoas)

let coisas =  [2, 'a' , 'h', 50, '!', 3]

function ehPar (numero) {
    if(numero%2 == 0){
        return numero
    }
}

let pares = coisas.filter(ehPar)

console.log(pares)