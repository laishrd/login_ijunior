
export default function MenuLista(props){
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