import './menu.css';


function Menu(props) {
  
  return(
    <nav className='menuVertical'>
      <ul>
        <li><a href=" "><span className="material-icons-round">home</span></a></li>
        <li><a href=" "><span className="material-icons-round">sports_esports</span></a></li>
        <li><a href=" "><span className="material-icons-round">account_circle</span></a></li>
        <i className="material-icons-round sair">logout</i>
      </ul>
    </nav> 
  );
}

export default Menu;
