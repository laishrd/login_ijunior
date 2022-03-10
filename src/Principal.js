import {Route, Routes} from "react-router-dom";
import TodosJogos from './TodosJogos'
import Home from './Home'
import MinhaConta from './MinhaConta'
import Menu from './Menu'
import './menu.css'

export default function Principal(){
    return(
        <div>
        <Menu/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/minhaconta' element={<MinhaConta/>} />
            <Route path='/todosjogos' element={<TodosJogos/>} />
        </Routes>
        </div>
    );
}