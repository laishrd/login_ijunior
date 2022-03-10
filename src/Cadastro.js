import './cadastro.css';

function Seta(){
  return(
    <>
      <img className='seta' src='' alt='seta'/>
    </>
  )
}

function PrimeiraLinha(){
  return(
    <fieldset className="grupo">
        <div class="campo">
            <label for="nome"><b>Nome</b></label>
            <input type="text" name="Nome" id="nome" class="entrada" required/>   
        </div>
        <div class="campo">
            <label for="email"><b>Email</b> </label>
            <input type="email" name="Email" id="email" class="entrada" required/>
        </div>
    </fieldset>
  )
}

function SegundaLinha(){
  return(
    <fieldset className="grupo">
        <div class="campo">
            <label for="senha"><b>Senha</b></label>
            <input type="password" name="Senha" id="senha" class="entrada" required/>   
        </div>
        <div class="campo">
            <label for="senha"><b>Confirmar senha</b></label>
            <input type="password" name="Senha" id="senha" class="entrada" required/>
        </div>
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
  <div class="box">
   <PrimeiraLinha/>
   <SegundaLinha/>
   <Botao/>
  </div>
  )
}

export default App;