import './style.css'
import PropTypes from 'prop-types';
import { Menu } from '../Menu'


export const CursoDetalhes = ({ImagemCurso, ResumoCurso, NomeCurso}) =>{
    return(
        <>
            <Menu/>
            <div className="invisivi"></div>
            <div className="organizacaoDetalhesCurso">
                <div className="imagemCursoDetalhe">
                    <img className='imagemDoCursoDetalhe' src={ImagemCurso} alt="" />  
                </div>
                <div className="detalheCursoCaracteristicas">
                    <div className="nomeCursoEAvalie">
                        <h1 className='nomeCursoDestaques'>{NomeCurso}</h1>
                        <button className='avalie'>Avalie</button>
                    </div>
                    <h1 className="resumo">Resumo do curso</h1>
                    <p className='resumoCursoTexto'>{ResumoCurso}</p>
                </div>
            </div>
        </>
    )
}

CursoDetalhes.propTypes = {
    ImagemCurso: PropTypes.any,
    ResumoCurso: PropTypes.any,
    NomeCurso: PropTypes.any
}