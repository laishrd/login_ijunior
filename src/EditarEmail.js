import './janela.css';
import Botao from './Botao'
import Input from './Input';

function EditarEmail(props){
return(
  <div className={props.classe}>
    <div onClick={() => props.setClasse('hide')} className='pelicula'></div>
    <div className='box'>
    <nav className='titulo'>
      <h1 className='white'>Editar Email</h1>
    </nav>
    <form>
        <div className='inputs'>
          <Input type="email" placeholder="Digite o email" id="email" label="Novo Email"/>
        </div>
        <div className='btns'>
          <Botao setClasse={props.setClasse} texto='Cancelar' classes='btn-marrom btn white'/>
          <Botao texto='Confirmar' classes='btn-roxo btn white'/>
        </div>
    </form>
  </div>
  </div>
  );
}

export default EditarEmail