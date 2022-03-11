
function Input(props){
    return(
      <div>
         <label htmlFor={props.id} className='white weight200'>{props.label}</label>
         <input id={props.id} onChange={(event) => props.setValor(event.target.value)} type={props.type} placeholder={props.placeholder} />
      </div>
    );
}

export default Input