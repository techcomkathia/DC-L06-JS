import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";

function Template({children}) {

    return (
        <div>
            <Cabecalho />
            {children}
            <Rodape />
        </div>
    )

}

export default Template