// uma casa lotérica tem 2 filas 
// a fila preferencial tem 3 vagas(PARA ATENDIMENTO)
// a fila normal tem 8 vagas(PARA ATENDIMENTO)

let filaNormal = [ 'Ana', 'Bia', 'Cleitinho', 'Davi', 'Eliana', 'Fernanda', 'Gustavo', 'Helena', 'Isabela', 'Joaquim', 'Maria', 'João' ]


let filaPreferencial = [ 'Joaquina', 'Antônio', 'Cristina', 'Domingos', 'Eduardo', 'Fernando', 'Gustavo', 'Helena', 'Isabela', 'Joaquim', 'Maria', 'João' ]

let filaAtendidos = []

// serão atendidos os 8 primeiros da fila normal 
for(let i = 0; i < 8; i++){
    let retirado = filaNormal.shift()  // retiro do iníco da fila normal
    filaAtendidos.push(retirado)// adiciono ao fim da fila atendidos
    console.log(filaNormal)
    console.log(filaAtendidos)
}

for(let i = 0; i < 3; i++){
    let retirado = filaPreferencial.pop() // retiro do iníco da fila preferencial
    filaAtendidos.push(retirado)// adiciono ao fim da fila atendidos
    console.log(filaPreferencial)
    console.log(filaAtendidos)
}

console.log('atendidos ' + filaAtendidos.length)
console.log('restante fila normal ' + filaNormal.length)
console.log('restante fila prenferencial ' + filaPreferencial.length)


// e os 3 últimos da fila preferencial
// todos os atendidos devem ser adicionados a uma terceira fila 'filaAtendidos' 
