import PropTypes from 'prop-types';
import './style.css'


export const Categoria = (props) => {
    return(
            <button className = 'categoriaCaixa'>
                {props.icon}
                <p className='textoCategoria'>{props.text}</p>
            </button>
    )
}

Categoria.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};