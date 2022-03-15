import {useEffect, useState} from 'react'
import api from './services/api'
import './lista-jogos.css';
import './janela.css'
import AdicionarJogo from './AdicionarJogo'
import EditarJogo from './EditarJogo'
import { useNavigate } from 'react-router-dom';

function MeusJogos(props){
 
  var [adicionarJogo, setAdicionarJogo] = useState('hide');
  var [editarJogo, setEditarJogo] = useState('hide');
  var [idJogo, setIdJogo] = useState(-1);

  let navigate = useNavigate();
  useEffect(()=>{
    if(!("id" in localStorage)){
        navigate("/login");
    }
  },[navigate]);

  return(
    <div>
      <AdicionarJogo classe={adicionarJogo} setClasse={setAdicionarJogo}/>
      <EditarJogo idJogo={idJogo} classe={editarJogo} setClasse={setEditarJogo}/>
      <div className='box-jogos'>
      <div className='meus-jogos'>
          <h1 className='white'>Meus Jogos</h1>
          <MenuLista setClasse={setAdicionarJogo}/>       
          <ListaJogos setIdJogo={setIdJogo} setClasse={setEditarJogo}/>
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
  
  function removerItem(id){
    api.delete(`/jogos/${id}`)
    .then(function (response) {
      let arrTemp = arrayJogos.filter(item => item.id != id);
      setArrayJogos(arrTemp);
    })
    .catch(function (error) {
      console.log(error);
    });
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
                  return <p key={indice}>{genero}</p> })
                }
              </li>
              <li><div className='icones-fim'><span className="material-icons-round caneta" onClick={()=>{ props.setClasse('show'); props.setIdJogo(obj.id) }} >edit</span><span onClick={() => removerItem(obj.id)} className="material-icons-round lixeira">delete</span></div></li>
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

