import axios from 'axios'
export default function Botao(props){

    let urlBase = 'http://localhost:3001';

    function clicarBotao(e){
        e.preventDefault();
        if(props.texto === 'Cancelar'){
            props.setClasse('hide');
        }else{
            console.log('não sou cancelar');
            axios.post(`${urlBase}/jogos/`, {
                nome: `${props.nome}`,
                preco: `${props.preco}`,
                genero: `${props.genero}`,
                headers: {
                    'Authorization': "JWT_TOKEN",
                    'Content-Type': 'application/json'
                  }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    return(
        <button onClick={clicarBotao} className={props.classes}>{props.texto}</button>
    );
}