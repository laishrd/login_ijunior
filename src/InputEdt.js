function InputEdt(props){
    return(
      <div>
         <label htmlFor={props.id} className='white weight200'>{props.label}</label>
         <input value={props.value || ''} id={props.id} onChange={(event) => props.setValor(event.target.value)} type={props.type} placeholder={props.placeholder} />
      </div>
    );
}

export default InputEdt