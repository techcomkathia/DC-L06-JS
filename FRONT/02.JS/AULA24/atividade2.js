// acesse the cat api e leia a documentação :)
// utilize o end point para buscar uma imagem aleatoria de gato
// mostre apenas a URL do objeto resposta no console
let containerImagem = document.getElementById('containerImagem')

// adicione uma imagem ao body do html

let url = 'https://api.thecatapi.com/v1/images/search'



function mostrarGatinho(){
    fetch(url)
    .then((resposta)=>{
        return resposta.json()
    })
    .then((arrayObjetos)=>{
        console.log(arrayObjetos) //todos
        let objeto = arrayObjetos[0]
        console.log(objeto.url) //primeiro
        return objeto.url
    })
    .then(url => {
        // let imagem = document.createElement('img')
        // imagem.src = url 
        // imagem.alt = 'gatinho aleatório'
        // imagem.width = '200'

        // containerImagem.appendChild(imagem)

        containerImagem.innerHTML = `<img src="${url}" class="card-img-top" alt="..." width="200">`
    })
    .catch((erro)=>{
        console.log(erro)
    })
}

mostrarGatinho() //montar a página

let botao = document.querySelector('button')
botao.addEventListener('click', mostrarGatinho )




