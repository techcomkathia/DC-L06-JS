// crie um array com 5 notas
// calcule a média das notas 
// exiba a média e todas as notas armazenadas no array no console

let notas = [10, 5.5, 7, 8, 9]
console.log(notas.length); // 5
let somaNotas = 0;
let media = 0;

for (let i = 0; i < notas.length; i++) {   
    somaNotas += notas[i];
    console.log(notas[i]);
}

media = Number(somaNotas/(notas.length));

console.log(media);
