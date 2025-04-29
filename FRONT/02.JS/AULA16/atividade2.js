function saudacao(nome, turno) {
    let newTurno = turno // transforma em minusculo

    if (newTurno === 'manha') {
        console.log(`Bom dia, ${nome}`);

    }else if(newTurno === 'tarde'){
        console.log(`Boa tarde, ${nome}`);

    }else if(newTurno === 'noite'){
        console.log(`Boa noite, ${nome}`);

    }else{
        console.log('Insira uma opcao válida');
        
    }

}
// com todos os parâmetros
saudacao('Joaquim', 'manha')
saudacao('Joaquim', 'tarde')
saudacao('Joaquim', 'noite')
saudacao('Joaquim', '')
// com um parâmetro a menos
saudacao('Joaquim')

// sem parâmetros
saudacao()

// com parâmetros a mais
saudacao('Joaquim', 'manha', 'tarde')
// os parâmetros a mais serão ignorados