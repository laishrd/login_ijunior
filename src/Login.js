import './login.css';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

function Email(props){

  return( 
    <div className='caixa-wrapper'>
      <label htmlFor='email1' className='email'>Email</label>
      <input  onChange={(event) => props.setEmail(event.target.value)} id='email1' className='caixa' type="text" placeholder=" " required="required"/>
    </div>
  )
}

function Senha(props){

  return(
    <div className='caixa-wrapper'>
      <label htmlFor='senha1' className='senha'>Senha</label>
      <input onChange={(event) => props.setSenha(event.target.value)}  id='senha1' className='caixa' type="password" placeholder=" " required="required"/>
    </div>
  )
}

function Botao(props){

  let navigate = useNavigate();
  let urlBase = 'http://localhost:3001';

  let [avisoErro, setAvisoErro] = useState("center opacity0");

  function fazerLogin(email, senha){
    axios.post(`${urlBase}/usuarios/login`, {
      email: `${email}`,
      senha: `${senha}`
    })
    .then(function (response) {
      console.log(response);
      navigate('/');
    })
    .catch(function (error) {
      console.log(error);
      setAvisoErro("center opacity1");
    });
  }

  return(
    <div className='botao-wrapper'>
    <p className={avisoErro}>Email ou senha incorretos!</p>
    <button onClick={()=> fazerLogin(props.email, props.senha)} className='botao'>Entrar</button>
    </div>
  )
}

function TextoCadastro(){
  return(
    <div className="cadastro">
      <p className='ask'>Novo Usuário? </p>
      <a className='link1' href='/cadastro'>Cadastre-se aqui</a>
    </div>
  )
}

export default function App(){

  var [email, setEmail] = useState("");
  var [senha, setSenha] = useState("");

  return(
    <div className='background-black'>
      <div className='geral'>
        <Email email={email} setEmail={setEmail}/>
        <Senha senha={senha} setSenha={setSenha}/>
        <Botao email={email} senha={senha}/>
        <TextoCadastro/>
      </div>    
    </div>
  );
}

