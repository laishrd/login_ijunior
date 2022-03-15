import {useState} from 'react'
import { useEffect } from 'react';
import api from './services/api';
import './lista-jogos.css';
import './janela.css'
import AdicionarJogo from './AdicionarJogo'
import EditarJogo from './EditarJogo'

function MeusJogos(props){

  var [adicionarJogo, setAdicionarJogo] = useState('hide');
  var [editarJogo, setEditarJogo] = useState('hide');

  return(
    <div>
      <AdicionarJogo classe={adicionarJogo} setClasse={setAdicionarJogo}/>
      <EditarJogo classe={editarJogo} setClasse={setEditarJogo}/>
      <div className='box-jogos'>
        <div className='meus-jogos'>
            <h1 className='white'>Todos Jogos</h1>
            <MenuLista setClasse={setAdicionarJogo}/>       
            <ListaJogos setClasse={setEditarJogo}/>
            <JogosFixos/>
            <AddJogos setClasse={setAdicionarJogo}/>
        </div>
      </div>
    </div>
  );
}

function MenuLista(props){
   return(
     <nav className="menu-lista">
       <ul>
         <p className='titulo'>Título</p>
         <p className='preço'>Preço</p>
         <p className='genero'>Gênero</p> 
         <div className='add-jogos1' onClick={() => props.setClasse('show')}><p className='add-icone'>Adicionar um Jogo</p><span className="material-icons-round icone">control_point </span></div>
       </ul>
     </nav>
   );
}

function ListaJogos(props){

  var [arrayJogos, setArrayJogos] = useState([]);
  var [classeIcones, setClasseIcones] = useState("display-block");

  useEffect(()=>{
    api.get(`jogos/`)
    .then(function(response){
      var arrTemp = response.data.filter(item => item.Usuario.id == localStorage.getItem("id"));
      console.log(arrTemp);
      setArrayJogos(arrTemp);
    })
    .catch(function(error){
        console.log(error);
    });
  },[])
 

  function removerItem(){

  }

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
              <li><div className='icones-fim'><span className="material-icons-round caneta" onClick={()=> props.setClasse('show')}>edit</span><span onClick={() => removerItem(obj, arrayJogos, setArrayJogos)}  className="material-icons-round lixeira">delete</span></div></li>
            </div>
          </ul>
        </div>
        ); 
       })}
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

function AddJogos(props){
  return(
    <div className='add-jogos2' onClick={() => props.setClasse('show')}>
      <span className="material-icons-round icone2">control_point </span>
      <p className='textoIcone2'>Adicionar um Jogo</p>  
    </div>
  ); 
}


function App() {
  return (
    <div>
      <MeusJogos/>
    </div>
  );
}

export default App;

