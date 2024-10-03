import PropTypes from 'prop-types';
import './style.css'


export const CartaoBranco = (props)=>{
    return(
        <div className="cardBranco">
        <div className="cardInfoBranco">
        {props.icon}
        <h1 className='textoCartaoBranco leagueSpartan'>{props.textoCartao}</h1>
        </div>
    </div>
    )
}

CartaoBranco.propTypes ={
    icon: PropTypes.any,
    textoCartao: PropTypes.any 
}