import { useContext } from "react"
import { Contexto} from "../contextos/GatosContexto"

function NomeGatos() {

    const {gatos, setGatos} = useContext(Contexto)

    console.log({gatos})

        return (
        <div>
            <h1>Componente com nomes dos gatos</h1>

            <ul>
                {gatos.map((gato, index) => <li key={index}>{gato.nome}</li>)}
            </ul>

        </div>
    )
}

export default NomeGatos