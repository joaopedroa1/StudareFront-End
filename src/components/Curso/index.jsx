import PropTypes from 'prop-types';
import './style.css'
import { Link } from 'react-router-dom';


export const Curso = ({imagemCurso, cursoTipo, professorCurso, analises, pagLink}) =>{
    return(
    <>

    <div className = 'organizacaoCurso'>
    <Link to = {pagLink} className='cursoDetalhesLink' > <div className='imagemCurso'><img className='imgCursoHome' src={imagemCurso} alt="" /></div></Link>
        <div className='textoGrupo'>
            <div>
                <h1 className="textoEstilo2">{cursoTipo}</h1>
                <h1 className="textoEstilo3">{professorCurso}</h1>
            </div>
        <h1 className="textoEstiloAnalise1">{analises}</h1>
        </div>
    </div>
        </>
    )

}


Curso.propTypes = {
    imagemCurso: PropTypes.any,
    cursoTipo: PropTypes.any,
    professorCurso: PropTypes.any,
    analises: PropTypes.any
}