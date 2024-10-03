import PropTypes from 'prop-types';
import './style.css'


export const CartaoAmarelo = (props)=>{
    return(
        <div className="cardAmarelo">
        <div className="cardInfoAmarelo">
        {props.icon}
        <h1 className='textoCartaoAmarelo leagueSpartan'>{props.textoCartao}</h1>
        </div>
    </div>
    )
}

CartaoAmarelo.propTypes ={
    icon: PropTypes.any,
    textoCartao: PropTypes.any 
}