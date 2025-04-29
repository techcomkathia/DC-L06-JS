import { useState } from "react"
function LoginSenhaEmail() {

    // se o email ou senha estiverem vazios ou incorretos, exibir um alerta pedindo para preencher os campos corretamente e informar que o acesso foi negado
    // se o email e senha estiverem corretos, exibir um alerta informando que o acesso foi concedido e fazer a limpeza dis valores dos campos

    const senhaCorreta = '1234'
    const emailCorreto = 'cleitinho@gatolaranja.com'

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(evento) {
      // remover o comportamento padrao do formulario
      evento.preventDefault()
      // validações de email e senha
      if(email == emailCorreto && senha == senhaCorreta) {
        alert('Acesso concedido')
        // limpar os campos
        setEmail('')
        setSenha('')
      }
      else if(email == '' || senha == '') {
        alert('Preencha corretamente os campos de email e senha')
      }
      else{
        alert('Acesso negado, email ou senha errados')
      }
    }
    

    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" value={email}
              onChange={(evento)=> {
                setEmail(evento.target.value)
                console.log(email)
              }}
            />
            <br/>
            <label for="senha">Senha:</label>
            <input type="password" name="senha" id="senha" value={senha}
              onChange={(e)=>{
                setSenha(e.target.value)
                console.log(senha)
              }}
            />
          <br/>
            <button type="submit">Entrar</button>
          </form>
      
        </div>
      );
}


export default LoginSenhaEmail


