import './janela.css';
import Botao  from './Botao';
import Input from './Input';
 
function EditarJogo(props){
  return(
    <div className={props.classe}>
      <div onClick={() => props.setClasse('hide')} className='pelicula'></div>
      <div className='box-janela'>
        <nav className='titulo'>
          <h1 className='white'>Editar Jogo</h1>
        </nav>
        <form>
            <div className='inputs'>
              <Input type="text" placeholder="Digite o título" id="titulo1" label="Título"/>
              <Input type="text" placeholder="Digite o preço" id="preço1" label="Preço"/>
              <Input type="text" placeholder="Digite o gênero" id="genero1" label="Gênero"/>
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

export default EditarJogo;
