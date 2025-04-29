// Crie o componente chamado demonstração de imc. Ele deverá ter as seguintes props: altura, peso , sexo e idade passados por props.
// Deverá mostrar as informações e o imc calculado.
// desestruture o objeto props para criar as variáveis altura, peso, sexo e idade

function DemostracaoIMC({altura, peso, sexo, idade}) {
    return (
        <div>
            <h5>Altura: {altura}</h5>
            <h5>Peso: {peso}</h5>
            <h5>Sexo: {sexo}</h5>
            <h5>Idade: {idade}</h5>
            <h5>IMC: {(peso / (altura) ** 2).toFixed(2)}</h5>
        </div>
    )
}

export default DemostracaoIMC