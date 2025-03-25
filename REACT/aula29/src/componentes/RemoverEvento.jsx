import { useState } from "react"
function RemoverEvento() {
    const [turno, setTurno] = useState('')
    function handleSubmit(evento) {
            evento.preventDefault()
            
            if(turno=='manhã'){
                alert('Bom dia')
                setTurno('')
                alert('Formulario enviado.')
            }else if (turno=='tarde'){
                alert('Boa tarde')
                setTurno('')
                alert('Formulario enviado.')
            }
            else if(turno=='noite'){
                alert('Boa noite')
                setTurno('')
                alert('Formulario enviado.')
            }
            else{
                alert('Turno inválido')
                alert('Preencha corretamente o campo de turno.')
            }
    }
    return(
        <form onSubmit={handleSubmit} >
            <input type="text" name="turno" id="turno" placeholder="turno"  value={turno}
            onChange={(evento)=> {
                setTurno(evento.target.value) 
                console.log(turno)}
            }/>
            <input type="submit" value='Enviar' /> 
        </form>
    )

}

export default RemoverEvento