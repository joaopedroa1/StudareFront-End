import './style.css'
import { Menu } from '../Menu'
import cursoJava from  '../../assets/cursoDeJavaDois.png'


export const CursoDetalhesJava = () =>{
    return(
        <>
            <Menu/>
            <div className="invisivi"></div>
            <div className="organizacaoDetalhesCurso">
                <div className="imagemCursoDetalhe">
                    <img className='imagemDoCursoDetalhe' src={cursoJava} alt="" />  
                </div>
                <div className="detalheCursoCaracteristicas">
                    <div className="nomeCursoEAvalie">
                        <h1 className='nomeCursoDestaques'>Curso Java</h1>
                        <button className='avalie'>Avalie</button>
                    </div>
                    <h1 className="resumo">Resumo do curso</h1>
                    <p className='resumoCursoTexto'>Curso de programação básica em Java e Javascript avançado no front-end.</p>
                    <div className="avaliacoesDetalhes">
                        <h1 className="resumo">Avaliação do curso</h1>
                        <h1 className="textoEstiloAnalise1">Positivas</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
