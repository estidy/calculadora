// Importacion
import Button from './Button'
import PropTypes from 'prop-types'
// Generacion de la funcion del componente MathOperations

const MathOperations =({onClickOperation,onClickEqual})=>
        <section className="math-operations">
            <Button text={"+"} clickHandler={onClickOperation}/>
            <Button text={"-"} clickHandler={onClickOperation}/>
            <Button text={"/"} clickHandler={onClickOperation}/>
            <Button text={"*"} clickHandler={onClickOperation}/>
            <Button text={"="} clickHandler={onClickEqual}/>
        </section>

// Estableciendo propiedades
MathOperations.prototype = {
    onClickEqual: PropTypes.func.isRequired,
    onClickOperation: PropTypes.func.isRequired
}
//exportacion del componente
export default MathOperations