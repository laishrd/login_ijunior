import {useState} from 'react'
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
          <h1 className='white'>Meus Jogos</h1>
          <MenuLista setClasse={setAdicionarJogo}/>       
          <ListaJogos setClasse={setEditarJogo}/>
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

  var [arrayJogos, setArrayJogos] = useState([{titulo: 'Dark Souls', preco : '159.90', genero : ['Souls-like', 'Dark-Fantasy', 'Dificil']},
  {titulo: 'Jogo jogável 2', preco : '199.90', genero : ['Dark', 'Fantasia', 'Hard']},
  {titulo: 'Jogo bastante jogável 2', preco : '299.90', genero : ['Dark', 'side', 'of', 'the', 'moon']},
  ]);
 

   return(
      <div>
       {arrayJogos.map(function(obj, i){
        return(
        <div className='lista-jogos'>
          <ul>
            <div key={i}>
              <li>{obj.titulo}</li>
              <li>R${obj.preco}</li>
              <li>
                {obj.genero.map(function(genero, indice){
                return <p key={indice}>{genero}</p>
                })}
              </li>
              <li><div className='icones-fim'><span className="material-icons-round caneta" onClick={() => props.setClasse('show')}>edit</span><span className="material-icons-round lixeira">delete</span></div></li>
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

