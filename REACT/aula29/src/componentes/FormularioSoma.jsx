// importar useState

function FormularioSoma() {

    //variáveis de estado controlado


    //função para exibir o resultado


    return(
        <div>
            <p>Digite dois números para somar e serem exibidos no alert</p>
            {/* onChange para capturar os valores dos inputs */}
            <input type="text" name="num1" id="num1"/> 
            <br />
            <input type="text" name="num2" id="num2" />
            <br />
            {/* onClick para executar a funcao de exibir resul */}
            <button id="btnSomar">Somar</button>
        </div>
    )
}