import PropTypes from 'prop-types';
import './style.css'


export const Cartao = (props)=>{
    return(
        <div className="card">
        <div className="cardInfo">
        {props.icon}
        <h1 className='textoCartao leagueSpartan'>{props.textoCartao}</h1>
        </div>
    </div>
    )
}

Cartao.propTypes ={
    icon: PropTypes.any,
    textoCartao: PropTypes.any 
}