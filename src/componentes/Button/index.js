import './Button.css'

export default function Button(props){
    
    return(
        (props.disabled) ?
            <button 
                className='button' 
                disabled={props.disabled} 
                style={{backgroundColor: 'red', cursor: 'not-allowed'}}
            >
                {props.texto}
            </button>
        :
            <button className='button' onClick={props.onClick} disabled={props.disabled}>
                {props.texto}
            </button>
    )
}