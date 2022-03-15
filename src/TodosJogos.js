import {useEffect, useState} from 'react'
import './lista-jogos.css';
import './janela.css'
import ListaJogos from './ListaJogos';
import MenuLista from './MenuLista'
import api from './services/api';
import AddJogos from './AddJogos';
import { useNavigate } from 'react-router-dom';

export default function TodosJogos(props){
 
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
          <h1 className='white'>Todos Jogos</h1>
          <MenuLista setClasse={setAdicionarJogo}/>       
          <ListaJogos adicionarJogo={adicionarJogo} setAdicionarJogo={setAdicionarJogo}/>
          <JogosFixos/>
          <AddJogos setClasse={setAdicionarJogo}/>
      </div>
    </div>
    </div>
  );
}





function JogosFixos(props){
  var [arrayJogos, setArrayJogos] = useState([]);

  useEffect(()=>{
    api.get(`jogos/`)
    .then(function(response){
      var arrTemp = response.data.filter(item => item.Usuario.id != localStorage.getItem("id"));
      console.log(arrTemp);
      setArrayJogos(arrTemp);
    })
    .catch(function(error){
        console.log(error);
    });
  },[])
 

  function criarArrayGeneros(obj){
    var arrayGeneros = obj.genero.split(",");
    return arrayGeneros;
  }

   return(
      <div>
       {arrayJogos.map(function(obj, i){
        return(
        <div key={i} className='lista-jogos'>
          <ul>
            <div>
              <li>{obj.nome}</li>
              <li>R${obj.preco}</li>
              <li>
                {
                  criarArrayGeneros(obj).map(function(genero, indice){
                    return <p key={indice}>{genero}</p>
                })
                }
              </li>
              <li><div className='icones-fim visibilidade-hidden'><span className="material-icons-round caneta">edit</span><span className="material-icons-round lixeira">delete</span></div></li>
            </div>
          </ul>
        </div>
        ); 
       })}
       </div>
   );
}




