import PropTypes from 'prop-types';
import './style.css'



export const CursoDestaque = ({imagemCurso, cursoTipo, professorCurso}) => {
    return (
        <>
        <div className="orgazinazcaoCursosDestaque">
            <div className="cursoDestaqueFoto">
                {imagemCurso}
            </div>
            <p className='destaquesTexto'>{cursoTipo}</p>
            <p className='destaquesTexto'>{professorCurso}</p>
        </div>
        </>
    )
}

CursoDestaque.propTypes = {
    imagemCurso: PropTypes.any,
    cursoTipo: PropTypes.any,
    professorCurso: PropTypes.any
}