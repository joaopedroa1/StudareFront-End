import PropTypes from 'prop-types';
import './style.css'
import { Link } from 'react-router-dom';

const baseURL = ''

export const Curso = ({imagemCurso, cursoTipo, professorCurso, analises}) =>{
    return(
    <>
    <Link to = '/cursoDetalhes' className='cursoDetalhesLink' >
    <div className = 'organizacaoCurso'>
        <div className='imagemCurso'>{imagemCurso}</div>
        <div className='textoGrupo'>
            <div>
                <h1 className="textoEstilo2">{cursoTipo}</h1>
                <h1 className="textoEstilo3">{professorCurso}</h1>
            </div>
        <h1 className="textoEstiloAnalise1">{analises}</h1>
        </div>
    </div>
    </Link>
        </>
    )

}


Curso.propTypes = {
    imagemCurso: PropTypes.any,
    cursoTipo: PropTypes.any,
    professorCurso: PropTypes.any,
    analises: PropTypes.any
}