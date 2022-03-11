import './janela.css';
import Botao  from './Botao';
import Input from './Input';

function TrocarSenha(props){
  return(
    <div className={props.classe}>
      <div onClick={() => props.setClasse('hide')} className='pelicula'></div>
      <div className='box-janela'>
        <nav className='titulo'>
          <h1 className='white'>Trocar Senha</h1>
        </nav>
        <form>
            <div className='inputs'>
              <Input type="password" placeholder="" id="senhaAtual" label="Senha Atual"/>
              <Input type="password" placeholder="" id="senhaNova" label="Nova Senha"/>
              <Input type="password" placeholder="" id="senhaNovaC" label="Confirmar nova senha"/>
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

export default TrocarSenha