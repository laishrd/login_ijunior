import {useEffect, useState} from 'react'
import './lista-jogos.css';
import './janela.css'
import ListaJogos from './ListaJogos';
import MenuLista from './MenuLista'
import AddJogos from './AddJogos';
import { useNavigate } from 'react-router-dom';

export default function MeusJogos(props){
 
  var [adicionarJogo, setAdicionarJogo] = useState('hide');


  let navigate = useNavigate();
  useEffect(()=>{
    if(!("id" in localStorage)){
        navigate("/login");
    }
  },[navigate]);

  return(
    <div>
      <div className='box-jogos'>
      <div className='meus-jogos'>
          <h1 className='white'>Meus Jogos</h1>
          <MenuLista setClasse={setAdicionarJogo}/>       
          <ListaJogos adicionarJogo={adicionarJogo} setAdicionarJogo={setAdicionarJogo}/>
          <AddJogos setClasse={setAdicionarJogo}/>
      </div>
    </div>
    </div>
  );
}


