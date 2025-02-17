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