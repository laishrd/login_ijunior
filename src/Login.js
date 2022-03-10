import './login.css';

function Email(){
  return( 
    <div className='caixa-wrapper'>
      <label htmlFor='email1' className='email'>Email</label>
      <input id='email1' className='caixa' type="text" placeholder=" " />
    </div>
  )
}

function Senha(){
  return(
    <div className='caixa-wrapper'>
      <label htmlFor='senha1' className='senha'>Senha</label>
      <input id='senha1' className='caixa' type="password" placeholder=" " />
    </div>
  )
}

function Botao(){
  return(
    <button className='botao'>Entrar</button>
  )
}

function Cadastro(){
  return(
    <div className="cadastro">
      <p className='ask'>Novo Usuário? </p>
      <a className='link1' href='#'>Cadastre-se aqui</a>
    </div>
  )
}

function App() {
  return (
  <div className='geral'>
      <Email/>
      <Senha/>
    <Botao/>
    <Cadastro/>
  </div>

    
  );
}

export default App;