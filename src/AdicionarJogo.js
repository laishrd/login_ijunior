import './janela.css';
import { useState } from 'react';
import Botao  from './Botao';
import Input from './Input';

function AdicionarJogo(props){


  let [nome, setNome] = useState("");
  let [preco, setPreco] = useState();
  let [genero, setGenero] = useState("");


    return(
      <div className={props.classe}>
        <div onClick={() => props.setClasse('hide')} className='pelicula'></div>
        <div className='box-janela'>
          <nav className='titulo'>
            <h1 className='white'>Adicionar Jogo</h1>
          </nav>
          <form>
              <div className='inputs'>
                <Input type="text" setValor={setNome} id="nome" label="Nome"/>
                <Input type="text" setValor={setPreco} id="preço2" label="Preço"/>
                <Input type="text" setValor={setGenero} id="genero2" label="Gênero"/>
              </div>
              <div className='btns'>
                <Botao setClasse={props.setClasse} texto='Cancelar' classes='btn-marrom btn white'/>
                <Botao nome={nome} preco={preco} genero={genero} texto='Adicionar' classes='btn-roxo btn white' funcao="adicionar jogo"/>
              </div>
          </form>
        </div>
      </div>
        
      );
}

export default AdicionarJogo