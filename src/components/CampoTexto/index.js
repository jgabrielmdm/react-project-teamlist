import './CampoTexto.css'

function CampoTexto(props){

    const PlaceholderModificada = `${props.placeholder}...`
    
    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={PlaceholderModificada}/> 
        </div>        
    )
}

export default CampoTexto