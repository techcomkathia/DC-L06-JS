import { useEffect } from "react"
import { useState } from "react"
function BuscarCEP() {

    const [objetoCEP, setObjetoCEP] = useState({})
    const [numeroCEP, setNumeroCEP] = useState('')
    const [url, setUrl] = useState(`https://viacep.com.br/ws/${numeroCEP}/json/`)

    function buscarCEP() {
        // usa o fetch para consumir a api do via cep usando a variável da url
    }

    useEffect(()=>{
        // essa função será executada toda vez que o componente for montado ou a url for alterada
        
    },[])

    return(<div>
        <input type="number" placeholder="digite o cep apenas números" onChange={} /> {/* essa funcao sera executada toda vez que o input for alterado mudando o número do cep */}
        <button onClick={}>Buscar CEP</button> 
        {/* essa função vai ser executada toda vez que o botão for clicado mudando o cep e a url */}

        <p>CEP:{objetoCEP.cep} Rua: {objetoCEP.logradouro} Bairro: {objetoCEP.bairro} </p>
    </div>)

}