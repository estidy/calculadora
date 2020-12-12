// Importacion
import Button from './Button'
import PropTypes from'prop-types'
//funciones

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumber => {
    const renderButton = number => (
        <Button
             key={number} 
             text={number.toString()} 
             clickHandler={onClickNumber}
        />
    )
    return numbers.map(renderButton)
}

// Generacion de la funcion  del componenete
const Numbers = ({onClickNumber}) => (
           <section className="numbers">
             {
                 renderButtons(onClickNumber)
             }
            </section>
)
// Estableciendo propiedades
Numbers.prototype ={
onClickNumber: PropTypes.func.isRequired
}
// Exportacion del componente
export default Numbers;