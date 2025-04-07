import { useEffect } from "react"
import { useState } from "react"
function BuscarCEP() {

    const [objetoCEP, setObjetoCEP] = useState({}) //atualizado pela funcao buscarCEP
    const [numeroCEP, setNumeroCEP] = useState('01001000') //atualizada quando o botão for clicado
    const [inputCEP, setInputCEP] = useState('') //atualizado com a digitação do usuário
    

    function buscarCEP() {
        // usa o fetch para consumir a api do via cep usando a variável da url
        fetch(`https://viacep.com.br/ws/${numeroCEP}/json/`)
            .then(response => response.json())
            .then(dados => {
                //console.log(dados)
                setObjetoCEP(dados)
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    useEffect(()=>{
        // essa função será executada toda vez que o componente for montado ou a url for alterada
        buscarCEP()        
    },[numeroCEP])

    return(<div>
        <input type="number" placeholder="digite o cep apenas números" onChange={
            (evento) => {
                setInputCEP(evento.target.value)
            }
        } /> {/* essa funcao sera executada toda vez que o input for alterado mudando o número do cep */}
        <button onClick={
            () => {
                setNumeroCEP(inputCEP)
            }
        }>Buscar CEP</button> 
        {/* essa função vai ser executada toda vez que o botão for clicado mudando o cep e a url */}

        <p>CEP:{objetoCEP.cep} Rua: {objetoCEP.logradouro} Bairro: {objetoCEP.bairro} </p>
    </div>)

}

export default BuscarCEP