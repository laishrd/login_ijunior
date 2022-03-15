import './janela.css';
import { useEffect, useState } from 'react';
import api from './services/api'
import Botao  from './Botao';
import InputEdt from './InputEdt';
 
function EditarJogo(props){

  let [nome, setNome] = useState("");
  let [preco, setPreco] = useState();
  let [genero, setGenero] = useState("");

    useEffect(()=>{
      if(props.idJogo >= 0){
        api.get(`jogos/${props.idJogo}`)
        .then(function(response){
          setNome(response.data.nome);
          setPreco(response.data.preco);
          setGenero(response.data.genero);
        })
        .catch(function(error){
            console.log(error);
        });
      }
    }, [props]);
 
  return(
    <div className={props.classe}>
      <div onClick={() => props.setClasse('hide')} className='pelicula'></div>
      <div className='box-janela'>
        <nav className='titulo'>
          <h1 className='white'>Editar Jogo</h1>
        </nav>
        <form>
            <div className='inputs'>
              <InputEdt value={nome} type="text" setValor={setNome} id="titulo1" label="Título"/>
              <InputEdt value={preco} type="text" setValor={setPreco} id="preço1" label="Preço"/>
              <InputEdt value={genero} type="text" setValor={setGenero} id="genero1" label="Gênero"/>
            </div>
            <div className='btns'>
              <Botao setClasseVisivel={props.setClasse} texto='Cancelar' classes='btn-marrom btn white'/>
              <Botao arrayJogos={props.arrayJogos} setArrayJogos={props.setArrayJogos} setClasseVisivel={props.setClasse} id={props.idJogo} nome={nome} preco={preco} genero={genero} texto='Confirmar' classes='btn-roxo btn white' funcao="editar jogo"/>
            </div>
        </form>
      </div>
    </div>
  );
}

export default EditarJogo;
