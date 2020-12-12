// Importacion
import Button from './Button'
import PropTypes from'prop-types'
// Generacion de la funcion  del componenete
const Functions =({onContentClear, onDelete})=>{
    return(
        <section className="functions">
            <Button type="button-long-text" text={"C"} clickHandler={onContentClear}/>
            <Button text={"X"} clickHandler={onDelete}/>
        </section>
    )
}
// Estableciendo propiedades
Functions.prototype ={
    onContentClear: PropTypes.func.isRequired,
    OnDelete: PropTypes.func.isRequired
}
// Exportacion del componente
export default Functions