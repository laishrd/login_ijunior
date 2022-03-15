import api from './services/api'

export default function Botao(props){

    function clicarBotao(e){
        e.preventDefault();

        if(props.funcao === "adicionar jogo"){
            adicionarJogo();
        }else if(props.funcao === "editar jogo"){
            editarjogo();
        }else if(props.funcao === "editar email"){
            editarEmail();
        }else if(props.texto === 'Cancelar'){
            props.setClasse('hide');
        }      
    }

    function adicionarJogo(){
        api.post(`jogos/`, {
            nome: props.nome,
            preco: props.preco,
            genero: props.genero,
        })
        .then(function (response) {
            //props.setArray([...props.arrayJogos]);
            //setInputValue("");
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function editarjogo(){
        api.put(`jogos/${props.id}`, {
            nome: props.nome,
            preco: props.preco,
            genero: props.genero,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function editarEmail(){
        api.put(`usuarios/${localStorage.getItem("id")}`,{
            email: props.email
        }).then(function(response){
            localStorage.setItem("email", props.email);
        }).catch(function(error){
             console.log(error);
        });
     }
    

    return(
        <button onClick={clicarBotao} className={props.classes}>{props.texto}</button>
    );
}