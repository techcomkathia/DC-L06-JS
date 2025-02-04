// crie um array com as seguintes informações:
// nome, idade, peso, altura, e-mail, senha

let usuario = ['Cleitinho', 20, 70, 1.80, 'cleitinho@gatolaranja.com', 'sachê']
console.log(usuario)

//imprima no console a terceira infomação do array

console.log(usuario[2]) //3-1= indice [2]

//adicionar uma nova informação ao array 

usuario[usuario.length] = 'nova informação' 
console.log(usuario)

// insira o endereço no array (próximo indice)
// atualize a senha na posição de indice 5 para 'novasenha'
usuario[usuario.length] = "Rua dos Bobos, 0"
console.log(usuario)
usuario[5] = "nova senha"
console.log(usuario)

