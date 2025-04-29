let animal = {
    nome : 'Cleitinho', // propriedade - key:value
    idade : 12,
    cor : 'laranja',
    sexo : 'macho',
    raca : 'SDR',
    x : 'exemplo FOR IN'
}

console.log(animal)
console.log(animal.nome)

animal.nome = 'Cleitinho Lima Felino' //atualizar
console.log(animal)

//criar uma nova propriedade
animal.endereco = 'Rua dos Bobos, 0'
animal.endereco = 'Hellcife'
console.log(animal)

for(let key in animal){
    console.log(`${key}: ${animal[key]}`) 
}

// a deleção de uma propriedade de um objeto é feita pelo delete

delete animal.x
console.log(animal)