import { useState } from "react"


function Calculadora() {

    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)

    function handleClick() {
        let result = valor1 + valor2
        alert(`O resultado da expressão é: ${result}`)
    }

    return (
        <>
            <p>Insira dois numeros para a soma</p>
            <input type="number" placeholder="Insira aqui o primeiro valor" onChange={(e) => setValor1(Number(e.target.value))} />
            <br
/>
            <input type="number" placeholder="Insira aqui o primeiro valor" onChange={(e) => setValor2(Number(e.target.value))} />
            <br />
            <button onClick={handleClick}>Somar</button>
        </>
    )
}

export default Calculadora