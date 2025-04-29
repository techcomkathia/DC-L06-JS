let form = document.querySelector('form')
let nome = document.querySelector('#nome')
let cargo = document.querySelector('#cargo')
let imagem = document.querySelector('#imagem')
let btnEnviar = document.querySelector('#btnEnviar')

// elemento do dom que receber o novo filho

let div = document.querySelector('#containerFunc')

function validarCampos() {
    //nome E email E telefone
    // para o E lógico todas as condições devem ser verdadeiras para retornar um verdadeiro
    if((nome.value).length>0 && (cargo.value).length>0 && (imagem.value).length>0){ 
        console.log('todos os campos foram preenchidos')
        return true
    } else{
        console.log('todos os campos não foram preenchidos')
        return false
    }
}

function mostrarFuncionario() {
    if(validarCampos()){
        let divNovoFuncionario = document.createElement('div')
        divNovoFuncionario.innerHTML = `
            <img src="${imagem.value}" class="card-img-top" alt="..." width="200">
            <div class="card-body">
              <h5 class="card-title">Nome: ${nome.value}</h5>
              <h5 class="card-text">Cargo: ${cargo.value}</h5>
            </div>`
        // classes do bootstrap
        divNovoFuncionario.classList.add('card')
        divNovoFuncionario.style.width = '18rem'
        // adicinar o filho ao pai 
        div.appendChild(divNovoFuncionario)

        // limpar os inputs
        nome.value = ''
        cargo.value = ''
        imagem.value = ''
    }
    else{
        alert('Todos os campos devem ser preenchidos para cadastrar o usuário')
    }
}

btnEnviar.addEventListener('click', mostrarFuncionario)

form.addEventListener('submit', (e)=>{
    e.preventDefault()
})