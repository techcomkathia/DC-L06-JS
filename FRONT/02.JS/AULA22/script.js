function clicarNoBotao(nome) {
    alert(nome + ' clicou no botão')
}

function mouseEmCimaBotao() {
    alert('Mouse em cima do botão')
}

function mostrarMensagem(){
    let titulo = document.getElementById('titulo')
    titulo.innerHTML = 'Olá Mundo!'
}

function apagarMensagem(){
    let titulo = document.getElementById('titulo')
    titulo.innerHTML = '!'
}

function zoomImagem(tamanho){
    let img = document.getElementById('imgGatinho')

    img.style.width = tamanho

    img.classList='bordaVermelha'
}

// criar a função
function ligarLampada(){
    let lampada = document.getElementById('lampada')
    lampada.src = 'ligada.jpg'
}

function desligarLampada(){
    let lampada = document.getElementById('lampada')
    lampada.src = 'desligada.jpg'
}

// selecionar o elemento que vai executar a função por meio do evento
let btnLigar = document.getElementById('btnLigar')

// adicionar o escutador de eventos - é um método para os objetos do document que permite executar uma função a partir de um evento
// objeto.addEventListener('evento', funcaoDeCallback)
btnLigar.addEventListener('mouseover', ligarLampada)
btnLigar.addEventListener('click', ()=>{
    let lampada = document.getElementById('lampada')
    lampada.src = 'desligada.jpg'
})
