import './janela.css';
import Botao from './Botao'
import { useState } from 'react';
import Input from './Input';

function EditarEmail(props){

  var [emailDigitado, setEmailDigitado] = useState("");

return(
  <div className={props.classe}>
    <div onClick={() => props.setClasse('hide')} className='pelicula'></div>
    <div className='box-janela'>
    <nav className='titulo'>
      <h1 className='white'>Editar Email</h1>
    </nav>
    <form>
        <div className='inputs'>
          <Input setValor={setEmailDigitado} type="email" id="email" label="Novo Email"/>
        </div>
        <div className='btns'>
          <Botao setClasseVisivel={props.setClasse} texto='Cancelar' classes='btn-marrom btn white'/>
          <Botao setEmailAtual={props.setEmailAtual} emailAtual={props.emailAtual} setClasseVisivel={props.setClasse} texto='Confirmar' emailDigitado={emailDigitado} classes='btn-roxo btn white' funcao="editar email"/>
        </div>
    </form>
  </div>
  </div>
  );
}

export default EditarEmail