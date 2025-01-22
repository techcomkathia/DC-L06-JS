//Escreva um algoritmo que exiba todos os números pares de 0 ao número passado pelo usuário (utilize prompt) e ao final mostre no console quantos números pares foram exibidos.

let cont = 0;
let numDigitado = Number(prompt('Digite Um numero'));
let qtdPares = 0

while (cont <= numDigitado) {
    if(cont % 2 === 0) {
        console.log(`Numeros Pares ${cont}`)
        qtdPares++ // qtdPares = qtdPares + 1 || qtdPares += 1
    }
    cont ++;
}