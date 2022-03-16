import { useEffect, useState } from "react"; 
import api from "./services/api";
import './lista-jogos.css';
import AdicionarJogo from "./AdicionarJogo";
import EditarJogo from "./EditarJogo";

export default function ListaJogos(props){

  var [editarJogo, setEditarJogo] = useState('hide');
  var [idJogo, setIdJogo] = useState(-1);
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
          <AdicionarJogo arrayJogos={arrayJogos} setArrayJogos={setArrayJogos} classe={props.adicionarJogo} setClasse={props.setAdicionarJogo}/>
          <EditarJogo arrayJogos={arrayJogos} setArrayJogos={setArrayJogos} idJogo={idJogo} classe={editarJogo} setClasse={setEditarJogo}/>
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
                <li><div className='icones-fim'><span className="material-icons-round caneta" onClick={()=>{ setEditarJogo('show'); setIdJogo(obj.id) }} >edit</span><span onClick={() => removerItem(obj.id)} className="material-icons-round lixeira">delete</span></div></li>
              </div>
            </ul>
          </div>
          ); 
         })}
         </div>
     );
}