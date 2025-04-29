//Leia três notas, calcule sua média e a exiba para o usuário

let n1 = prompt('Digite a primeira nota')
let n2 = prompt('Digite a segunda nota')
let n3 = prompt('Digite a terceira nota')
n1 = Number(n1)
n2 = Number(n2)
n3 = Number(n3)

let media = (n1 + n2 + n3) / 3

alert('Sua média é ' + media)


//Leia o lado de um quadrado e calcule sua área. (Lembrando que a área é lado ao quadrado)
let lado = prompt('Digite o lado do quadrado (apenas numeros)') // 2.15

let inteiro = parseInt(lado) //2
let flutuante = parseFloat(lado) // 2.15
lado = Number(lado) // 2.15

let area = lado ** 2
//ou area = lado * lado
alert('a area do quadrado é ' + area) // para o usuário
console.log('a area do quadrado é ' + area) // para os desenvolvedores