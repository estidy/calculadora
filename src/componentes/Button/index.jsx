// Importaciones
import PropTypes from 'prop-types'
import './Button.css'
 // generacion de la funcion

 const Button = ({type, text, clickHandler})=>
        <button className={type} onClick={()=>clickHandler(text)}>
            <span>{text} </span>
        </button>

 Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
 }
 // Exportacion
 export default Button