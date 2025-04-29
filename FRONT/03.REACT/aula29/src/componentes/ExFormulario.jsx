import { useState } from "react"
function ExFormulario() {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    function mostrarInformacoes() {
        alert(`Ola ${nome}, vocé tem ${idade} anos`)
    }
   

    return(
        <div>
            <input type="text" name="nome" id="nome" placeholder="digite seu nome" 
            onChange={(evento)=> {
                setNome(evento.target.value) 
                console.log(nome)}
            }
            />
            <input type="number" name="idade" id="idade" placeholder="digite sua idade"
            onChange={(evento) => {
                setIdade(evento.target.value)
            }} />

            <button onClick={mostrarInformacoes}>mostrar informações</button>
        </div>
    )

}


export default ExFormulario