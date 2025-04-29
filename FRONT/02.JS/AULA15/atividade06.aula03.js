//Escreva um loop while que exiba todos os números pares de 0 a 10 no console, por fim mostre a quantidade de números pares e a soma de todos eles

let numero = 0 //incremento para ser mostrado no console
let qtdPares = 0 //contador -> conta quantas vezes o loop foi executado ou determinada situação ocorreu
let somaPares = 0  //acumulador -> guarda os valores somados


while(numero <= 10){ // 1 2 3 4 5 6 7 8 9 10 11
    // código a ser executado caso a condição seja verdadeira
    if(numero % 2 == 0){
        console.log(numero)
        qtdPares++
        somaPares += numero // somaPares = somaPares + cont
    }

    //atualização da condição para ser executada novamente
    numero = numero + 1 // por incremento
}

console.log('Quantidade de números pares ' + qtdPares)
console.log('Soma dos números pares ' + somaPares)