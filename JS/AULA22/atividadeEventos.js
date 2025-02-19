// 1º passo selecionar os elementos que serão manipulados
let div = document.getElementById("retangulo");

// 2º passo criar a função
function mudarBackground(cor){
    // a div será manipulada na sua propriedade 
    // style.backgroundColor
    div.style.backgroundColor = cor

}

// 3º passo executar a função (no arquivo html)
// adidionar um evento ao elemento no html
// onclick para botões
// onmouseover para retangulo

