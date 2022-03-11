import {useNavigate} from 'react-router-dom'
import './menu.css';


export default function Menu(props) {
  
  let navigate = useNavigate();

  return(
    <nav className='menuVertical'>
      <ul>
        <li onClick={() => navigate('/')}><span className="material-icons-round">home</span></li>
        <li onClick={() => navigate('/todosjogos')}><span className="material-icons-round">sports_esports</span></li>
        <li onClick={() => navigate("/minhaconta")}><span className="material-icons-round">account_circle</span></li>
        <i className="material-icons-round sair">logout</i>
      </ul>
    </nav> 
  );
}
