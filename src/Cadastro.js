import './cadastro.css';

function Seta(props) {
  
  return(
    <nav className='Seta'>
      <p className='arrow'><a href=" "> <span className="material-icons-round">arrow_back</span></a></p>
    </nav> 

  );
}
function PrimeiraLinha(){
  return(
    <fieldset className="grupo">
        <div className="campo">
            <label htmlFor="nome"><b>Nome</b></label>
            <input type="text" name="Nome" id="nome" className="entrada" required/>   
        </div>
        <div className="campo">
            <label htmlFor="email"><b>Email</b> </label>
            <input type="email" name="Email" id="email" className="entrada" required/>
        </div>
        <div className='clear'></div>
    </fieldset>
  )
}

function SegundaLinha(){
  return(
    <fieldset className="grupo">
        <div className="campo">
            <label htmlFor="senha"><b>Senha</b></label>
            <input type="password" name="Senha" id="senha" className="entrada" required/>   
        </div>
        <div className="campo">
            <label htmlFor="senha"><b>Confirmar senha</b></label>
            <input type="password" name="Senha" id="senha2" className="entrada" required/>
        </div>
        <div className='clear'></div>
    </fieldset>
  )
}

function Botao(){
  return(
    <div className="divSubmit">
      <input type="submit" value="Cadastre-se" name="submit" id="submit"/>
    </div>
  )
}

function App(){
  return(
  <div className='background-black'>
    <Seta/>
    <div className="box-cadastro">
    <PrimeiraLinha/>
    <SegundaLinha/>
    <Botao/>
    </div>
  </div>
  )
}

export default App;