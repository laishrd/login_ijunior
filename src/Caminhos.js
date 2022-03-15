import {Link} from 'react-router-dom'

export default function Caminhos(){
    return(
        <div className='caminhos'>
            <Link className='display-block' to='/'>Editar jogo</Link>
            <Link className='display-block'  to='/adicionarjogo'>Adicionar jogo</Link>
            <Link className='display-block'  to='/editaremail'>Editar email</Link>
            <Link className='display-block'  to='/trocarsenha'>Trocar senha</Link>
            <Link className='display-block'  to='/minhaConta'>Minha Conta</Link>
        </div>
    );
}