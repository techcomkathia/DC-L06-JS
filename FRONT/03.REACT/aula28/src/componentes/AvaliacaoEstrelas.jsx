import { useState } from "react";

function AvaliacaoEstrelas() {
    //lógica da função
    const [texto, setTexto] = useState('')

    function avaliar(numeroEstrelas){
        let texto = `Muito bom! ${numeroEstrelas} estrelas!`
        setTexto(texto)
    }
    
    return(
        <>
         <h1>Clique no botão de 1 a 5 para dar a quantidade de estrelas</h1>
         <button onClick={()=>avaliar(1)}>1</button>
         <button onClick={()=>avaliar(2)}>2</button>
         <button onClick={()=>avaliar(3)}>3</button>
         <button onClick={()=>avaliar(4)}>4</button>
         <button onClick={()=>avaliar(5)}>5</button>
         <h6> {texto}</h6>
         {/* o texto deve mostrar 'Muito bom! n estrelas! */}
        </>
    )
}

export default AvaliacaoEstrelas
