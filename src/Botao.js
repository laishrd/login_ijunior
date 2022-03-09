export default function Botao(props){

    function verificarCancelar(e){
        e.preventDefault();
        if(props.texto === 'Cancelar'){
            props.setClasse('hide');
        }else{
            console.log('não sou cancelar');
        }
    }

    return(
        <button onClick={verificarCancelar} className={props.classes}>{props.texto}</button>
    );
}