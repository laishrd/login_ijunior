import './janela.css';
import Botao from './Botao'
import { useState } from 'react';
import Input from './Input';

function EditarEmail(props){

  var [email, setEmail] = useState("");

return(
  <div className={props.classe}>
    <div onClick={() => props.setClasse('hide')} className='pelicula'></div>
    <div className='box-janela'>
    <nav className='titulo'>
      <h1 className='white'>Editar Email</h1>
    </nav>
    <form>
        <div className='inputs'>
          <Input setValor={setEmail} type="email" id="email" label="Novo Email"/>
        </div>
        <div className='btns'>
          <Botao setClasse={props.setClasse} texto='Cancelar' classes='btn-marrom btn white'/>
          <Botao texto='Confirmar' email={email} classes='btn-roxo btn white' funcao="editar email"/>
        </div>
    </form>
  </div>
  </div>
  );
}

export default EditarEmail