import './janela.css'
import './minha-conta.css'
import api from './services/api'
import {useEffect, useState} from 'react'
import EditarEmail from './EditarEmail'
import TrocarSenha from './TrocarSenha'
import { useNavigate } from 'react-router-dom'

function TelaConta(){

    let navigate = useNavigate();
    useEffect(()=>{
      if(!("id" in localStorage)){
          navigate("/login");
      }
    },[navigate]);

    var [editarEmail, setEditarEmail] = useState('hide');
    var [trocarSenha, setTrocarSenha] = useState('hide');

    var [emailAtual, setEmailAtual] = useState("");
    var [nome, setNome] = useState("");

    useEffect(()=>{
        api.get(`usuarios/${localStorage.getItem('id')}`)
        .then(function (response) {
            setEmailAtual(response.data.email);
            setNome(response.data.nome);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);


    return(
        <div>
            <EditarEmail emailAtual={emailAtual} setEmailAtual={setEmailAtual} classe={editarEmail} setClasse={setEditarEmail}/>
            <TrocarSenha classe={trocarSenha} setClasse={setTrocarSenha}/>
            <div className='box-conta'>
                <div className='tela-conta'>
                    <h1 className='white'>Minha Conta</h1>
                        <label className='white weight200'>Nome</label>
                        <input type='text' disabled="disabled" placeholder={nome}/>
                        <label className='white weight200' >Email</label>
                        <input type='text' disabled="disabled" placeholder={emailAtual}/>
                    <div className="btns-conta">
                        <button onClick={() =>setEditarEmail('show')} className='btn-roxo-conta white'>Editar Email</button>
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