import './janela.css';
import Botao  from './Botao';
import Input from './Input';

function AdicionarJogo(props){
    return(
      <div className={props.classe}>
        <div onClick={() => props.setClasse('hide')} className='pelicula'></div>
        <div className='box-janela'>
          <nav className='titulo'>
            <h1 className='white'>Adicionar Jogo</h1>
          </nav>
          <form>
              <div className='inputs'>
                <Input type="text" placeholder="Digite o nome" id="nome" label="Nome"/>
                <Input type="text" placeholder="Digite o preço" id="preço2" label="Preço"/>
                <Input type="text" placeholder="Digite o gênero" id="genero2" label="Gênero"/>
              </div>
              <div className='btns'>
                <Botao setClasse={props.setClasse} texto='Cancelar' classes='btn-marrom btn white'/>
                <Botao texto='Adicionar' classes='btn-roxo btn white'/>
              </div>
          </form>
        </div>
      </div>
        
      );
}

export default AdicionarJogo