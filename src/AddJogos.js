export default function AddJogos(props){
    return(
      <div className='add-jogos2' onClick={() => props.setClasse('show')}>
        <span className="material-icons-round icone2">control_point </span>
        <p className='textoIcone2'>Adicionar um Jogo</p>  
      </div>
    ); 
  }