import Input from './Input'
import './janela.css'
import './minha-conta.css'
import {useState} from 'react'
import EditarEmail from './EditarEmail'
import TrocarSenha from './TrocarSenha'

function TelaConta(){

    var [editarEmail, setEditarEmail] = useState('hide');
    var [trocarSenha, setTrocarSenha] = useState('hide');

    return(
        <div>
            <EditarEmail classe={editarEmail} setClasse={setEditarEmail}/>
            <TrocarSenha classe={trocarSenha} setClasse={setTrocarSenha}/>
            <div className='box-conta'>
                <div className='tela-conta'>
                    <h1 className='white'>Minha Conta</h1>
                    <Input label='Nome'/>
                    <Input label='Email'/>
                    <div className="btns-conta">
                        <button onClick={() => setEditarEmail('show')} className='btn-roxo-conta white'>Editar Email</button>
                        <button onClick={() => setTrocarSenha('show')}  className='btn-roxo-conta white'>Trocar Senha</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MinhaConta(){
    return(
        <div>
            <TelaConta/>
        </div>
    );
}