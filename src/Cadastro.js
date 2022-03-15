import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './services/api';
import './cadastro.css';

function Seta(props){
  let navigate = useNavigate();
  return(
    <div onClick={() => navigate("/login")} className='seta'>
      <span className="material-icons-round arrow">arrow_back</span>
    </div> 
  );
}
function PrimeiraLinha(props){

  return(
    <fieldset className="grupo primeiro-grupo">
      <div className="campo">
          <label htmlFor="nome">Nome</label>
          <input onChange={(event) => props.setNome(event.target.value)} type="text" name="Nome" id="nome" className="entrada" required="required"/>   
      </div>
      <div className="campo">
          <label htmlFor="email">Email</label>
          <input onChange={(event) => props.setEmail(event.target.value)} type="email" name="Email" id="email" className="entrada" required="required"/>
      </div>
    </fieldset>
  )
}

function SegundaLinha(props){

  let [classeAviso, setClasseAviso] = useState("center opacity0");

  function receberSenhaConf(senhaConf){
    if(props.senha !== senhaConf){
      setClasseAviso("center opacity1");
    }else{
      setClasseAviso("center opacity0");
    }
    props.setSenhaConf(senhaConf);
  }

  return(
    <fieldset className="grupo">
      <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input onChange={(event) => props.setSenha(event.target.value)} type="password" id="senha" className="entrada" required="required"/>   
      </div>
      <div className="campo">
          <label htmlFor="senha">Confirmar senha</label>
          <input onChange={(event) => receberSenhaConf(event.target.value)} type="password" id="senha2" className="entrada" required="required"/>
      </div>
      <p className={classeAviso}>As senhas não coicidem!</p>
    </fieldset>
  )
}

function Botao(props){

  let navigate = useNavigate();

  function fazerCadastro(nome, email, senha, senhaConf, e){
    e.preventDefault();
    if(senha !== senhaConf){
      alert("As senhas não são iguais!");
    }else if(nome === "" || email === "" || senha === "" || senhaConf === ""){
      alert("Campos vazios não são permitidos");
    }else{
      api.post(`usuarios/`, {
        nome: `${nome}`,
        email: `${email}`,
        senha: `${senha}`,
      })
      .then(function (response){
        console.log(response);
        navigate('/login');
      })
      .catch(function (error){
        console.log(error);
      });
    }

  }

  return(
    <div className="divSubmit">
      <input onClick={(e)=> fazerCadastro(props.nome, props.email, props.senha, props.senhaConf, e)} type="submit" value="Cadastre-se" name="submit" id="submit"/>
    </div>
  )
}



function Cadastro(){

  var [nome, setNome] = useState("");
  var [email, setEmail] = useState("");
  var [senha, setSenha] = useState("");
  var [senhaConf, setSenhaConf] = useState("");

  return(
  <div className='background-black'>
    <Seta/>
    <div className="box-cadastro">
    <form>
    <PrimeiraLinha nome={nome} setNome={setNome} email={email} setEmail={setEmail}/>
    <SegundaLinha senha={senha} setSenha={setSenha} senhaConf={senhaConf} setSenhaConf={setSenhaConf}/>
    <Botao nome={nome} email={email} senha={senha} senhaConf={senhaConf}/>
    </form>
    </div>
  </div>
  )
}

export default Cadastro;