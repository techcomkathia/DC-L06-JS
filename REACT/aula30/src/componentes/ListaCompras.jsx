// crie um formulário que permita o usuário adicionar itens em uma lista de compras. 
// Não é possível inserir um item vazio ou um item repetido. Caso isso aconteça devrá ser mostrada uma mensagem informando o erro.
// ao clicar em adicionar, o item deverá ser adicionado na lista de compras que será renderizada abaixo do formulário com  a atualização. 
import { useState } from "react";
function ListaCompras() {
    let [lista, setLista] = useState([])
    let [item, setItem] = useState('')

    function handleSubmit(e) {

    }

    return(
        <>
            <div>
                <form action="#">
                    <input type="text" placeholder="adicionar item" value={item}/>
                    <button type="submit">adicionar</button>
                </form>
            </div>
            <div>
                <ul>
                    {/* renderizar a lista  */}
                </ul>
            </div>
        </>
    )
}

export default ListaCompras