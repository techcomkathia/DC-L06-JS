// com base em um array de palavras, crie um novo array com objetos que terão as seguintes propriedades: palavra e quantidade de letras

let palavras = [ 'gato', 'pássaro', 'capivara', 'serpente', 'papagaio']

// [
//     {palavra: 'gato',
//     quantidadeLetras: 4}
//     
//]

console.log('palavra'.length)

let objetosPalavras = palavras.map((elementoArray) => {
    //let objPalavra = [elementoArray, elementoArray]
    let objPalavra = {
        palavra:elementoArray, 
        quantidadeLetras: elementoArray
    }
    return objPalavra
})

console.log('Novo array')
console.log(objetosPalavras)
console.log('array de referência')
console.log(palavras)



let palavras2 = ['gato','passaro','capivara','serpente','papagaio']
let novoArray= palavras.map(function(palavras){
    console.log(`A palavra ${palavras} tem ${palavras.length} letras`)
    return {
        palavra: palavras, 
        quantidadeLetras: palavras.length
    } //retorna um array de objetos com as palavras
})

