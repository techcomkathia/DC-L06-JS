import { useContext } from "react"; //permite usar o contexto compartilhado a toda a aplicação
import { ContextoFuncionarios } from "../contexto/FuncionariosProvider";

export default function Home() {
    const {funcionarios, setFuncionarios} = useContext(ContextoFuncionarios)
    return (
        <>
            <h1>Home</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum dolorum ea cum quod ad consectetur. Adipisci expedita non dolorem, veniam dolor sapiente eum ab? Dignissimos, totam nemo exercitationem id quia praesentium facilis a excepturi sunt consequatur dolores adipisci facere? Repudiandae eos iste maiores veritatis enim aliquid debitis, voluptas vel.</p>

            <ul>
                {funcionarios.map((funcionario) => (
                    <li key={funcionario.id}>{funcionario.nome}</li>
                ))}
            </ul>

            

        </>
    );
}