import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";

function Template({children}) {

    return (
        <>
            <Cabecalho />
            {children}
            <Rodape />
        </>
    )
}

export default Template