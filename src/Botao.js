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
            props.setClasseVisivel('hide');
        }      
    }

    function atualizarArrayJogos(){
        api.get(`jogos/`)
        .then(function(response){
            var arrTemp = response.data.filter(item => item.Usuario.id == localStorage.getItem("id"));
            props.setArrayJogos(arrTemp);
        })
        .catch(function(error){
            console.log(error);
        });
    }

    function adicionarJogo(){
        api.post(`jogos/`, {
            nome: props.nome,
            preco: props.preco,
            genero: props.genero,
        })
        .then(function (response) {
            atualizarArrayJogos();
            props.setClasseVisivel('hide');
            document.getElementById('nome').value = '';
            document.getElementById('preco2').value = '';
            document.getElementById('genero2').value = '';
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
            atualizarArrayJogos();
            props.setClasseVisivel('hide');
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    function editarEmail(){
        api.put(`usuarios/${localStorage.getItem("id")}`,{
            email: props.emailDigitado
        }).then(function(response){
            localStorage.setItem("email", props.emailDigitado);
            props.setEmailAtual(props.emailDigitado)
            props.setClasseVisivel('hide');
        }).catch(function(error){
             console.log(error);
        });
     }
    

    return(
        <button onClick={clicarBotao} className={props.classes}>{props.texto}</button>
    );
}