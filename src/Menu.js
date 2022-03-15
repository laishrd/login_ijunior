import {useNavigate} from 'react-router-dom'
import api from './services/api'
import './menu.css';


export default function Menu(props) {
  
  let navigate = useNavigate();

 function fazerlogout(){
   api.get(`usuarios/logout`)
   .then(function(response){
     localStorage.removeItem("id");
     localStorage.removeItem("email");
     navigate('/login');
   })
   .catch(function(error) {
     console.log(error);
   });
 }

  return(
    <div> 
    <nav className='menuVertical'>
      <ul>
        <li onClick={() => navigate('/')}><span className="material-icons-round">home</span></li>
        <li onClick={() => navigate('/todosjogos')}><span className="material-icons-round">sports_esports</span></li>
        <li onClick={() => navigate("/minhaconta")}><span className="material-icons-round">account_circle</span></li>
        <i onClick={fazerlogout} className="material-icons-round sair">logout</i>
      </ul>
    </nav> 

    <nav className='menuHorizontal'>
      <ul>
        <li onClick={() => navigate('/')}><span className="material-icons-round">home</span></li>
        <li onClick={() => navigate('/todosjogos')}><span className="material-icons-round">sports_esports</span></li>
        <li onClick={() => navigate("/minhaconta")}><span className="material-icons-round">account_circle</span></li>
        <i className="material-icons-round sair">logout</i>
      </ul>
    </nav> 
  </div>
   
  );
}
