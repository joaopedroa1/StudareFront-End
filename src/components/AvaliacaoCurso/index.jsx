
import prof from '../../assets/renanSilvaDev.png'
import PropTypes from 'prop-types';
import './style.css'


export const AvaliacaoCurso = ({UserName, UserAval, UserAvalText}) =>{
    return(
        <>
        <div className="orgAvaliacao">
            <div className="fotoAvaliacao"><img className='usuarioAvaliacaoFoto' src={prof} alt="" /></div>
            <div className="avalAlunoCurso">
                <h1 className="nomeUser">{UserName}</h1>
                <h1 className="avaliacaoUser">{UserAval}</h1>
                <h1 className="avaliacaoTextoUser">{UserAvalText}</h1>
            </div>
        </div>
        </>
    )
}

AvaliacaoCurso.propTypes = {
    UserName: PropTypes.any,
    UserAval: PropTypes.any,
    UserAvalText: PropTypes.any
}
