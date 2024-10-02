import PropTypes from 'prop-types';
import './style.css'



export const CursoDestaque = ({imagemCurso, cursoTipo, professorCurso}) => {
    return (
        <div className="orgazinazcaoCursosDestaque">
            <img className='cursoDestaqueFoto' src={imagemCurso} alt="" />
            <p className='destaquesTexto titulo'>{cursoTipo}</p>
            <p className='destaquesTexto textoInfo'>{professorCurso}</p>
        </div>
    )
}

CursoDestaque.propTypes = {
    imagemCurso: PropTypes.any,
    cursoTipo: PropTypes.any,
    professorCurso: PropTypes.any
}