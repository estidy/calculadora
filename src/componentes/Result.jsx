// Importacion
import PropTypes from 'prop-types'
// componente Result
const Result = ({value})=>
        <div className="result">
            {value}
        </div>

Result.propTypes = {
    value: PropTypes.string.isRequired
}
// Estableciendo valores por defecto
Result.defaultProps = {
value: "0"
} 
export default Result