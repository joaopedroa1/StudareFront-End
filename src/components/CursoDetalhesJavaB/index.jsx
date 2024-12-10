import './style.css'
import { Menu } from '../Menu'
import cursoHTML from  '../../assets/HTMLcurso.png'


export const CursoDetalhesHTML = () =>{
    return(
        <>
            <Menu/>
            <div className="invisivi"></div>
            <div className="organizacaoDetalhesCurso">
                <div className="imagemCursoDetalhe">
                    <img className='imagemDoCursoDetalhe' src={cursoHTML} alt="" />  
                </div>
                <div className="detalheCursoCaracteristicas">
                    <div className="nomeCursoEAvalie">
                        <h1 className='nomeCursoDestaques'>Curso HTML</h1>
                        <button className='avalie'>Avalie</button>
                    </div>
                    <h1 className="resumo">Resumo do curso</h1>
                    <p className='resumoCursoTexto'>Curso de programação completo HTML e CSS, do básico ao avançado.</p>
                    <div className="avaliacoesDetalhes">
                        <h1 className="resumo">Avaliação do curso</h1>
                        <h1 className="textoEstiloAnalise1">Muit Positivas</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
