import { useState } from "react";
import { useEffect } from "react";
function ListaUsuarios(){

    let [usuarios, setUsuarios] = useState([]);
    let [carregou, setCarregou] = useState('Não foi carregado');


    function BuscarUsuarios(){
        fetch('https://fakestoreapi.com/users')
            .then(response => response.json())
            .then(dados => {
                //console.log(dados)
                setUsuarios(dados)
                console.log('A FUNÇÃO BUSCAR USUARIOS FOI CHAMADA E TODOS OS USUÁRIOS FORAM CARREGADOS')
            })
            .catch(erro => console.log(erro))
            ;
    }

    useEffect(()=>{
        BuscarUsuarios()
    },[]) // só será executada na primeira renderização do componente

    useEffect(()=>{
        console.log('Sou uma função que é executada quando a variável carregou for alterada')
       
    },[carregou])
   
    console.log('Sou um console.log que fui executado na atualização do componente') // sera executado toda vez que o componente for atualizado
    
    
    return(
        <div>
            <h5>{carregou}</h5>
            <button onClick={()=>{
                setCarregou('Foi carregado')}
            }>Atualizar estado</button>
            {usuarios.map((usuario) => { return <h6 key={usuario.id}>{usuario.username}</h6>})}
        </div>
    )
}

export default ListaUsuarios