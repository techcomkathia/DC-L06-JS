/*console.log('5' == 5) //true

//apenas o valor
console.log(5 === 5) //false
// valor e tipo 
//'5' valor 5 tipo string 
//5 valor 5 tipo number

console.log('5.5' != 5.5) //true
//valor diferente
console.log('5' !== 5) //false


console.log('casa' === 'casa')*/

let numero = 2

/*if(numero == 0){
    console.log('zero')
}
else if (numero == 1){ 
    console.log('um')
}
else if (numero == 2){
    console.log('dois')
}
//else é executado caso nehuma das condições acima sejam verdadeiras
else{
    console.log('número desconhecido')
}*/


//condição de paridade 

/*let num = 7.2
console.log(num / 2 )
console.log(num % 2)
console.log((num % 2) == 0)

if(num % 2 == 0){
    console.log('par')
}
else {
    console.log('impar')
}*/


/*

if(falso){
    não será executado
}
else if(falso){
    não será executado
}
else{
    é executado
}


*/


let escolha = 'vermelho'
switch(escolha){
    case 'vermelho':
        console.log('pare')
       break;
    case 'verde':
        console.log('siga em frente')
        break;
    case 'amarelo':
        console.log('atencão')
        break;
    default:
        console.log('o sinal está quebrado')
}

/* Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%*/