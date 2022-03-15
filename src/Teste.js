import EditarJogo from './EditarJogo';
import AdicionarJogo from './AdicionarJogo';
import EditarEmail from './EditarEmail';
import TrocarSenha from './TrocarSenha';
import {Route, Routes} from 'react-router-dom'
import Caminhos from './Caminhos';
import MinhaConta from './Menu';

export default function Teste(){
    return(
        <div>
            <Caminhos/>
            <Routes>
                <Route element={<EditarJogo/>} path="/"/>
                <Route element={<AdicionarJogo/>} path="/adicionarjogo"/>
                <Route element={<EditarEmail/>} path="/editaremail"/>
                <Route element={<TrocarSenha/>} path="/trocarsenha"/>
                <Route element={<MinhaConta/>} path="/minhaconta"/>
            </Routes>
        </div>
    );
}

