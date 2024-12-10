import './style.css'
import { Menu } from '../Menu'
import react from  '../../assets/fotoReact.png'


export const CursoDetalhes = () =>{
    return(
        <>
            <Menu/>
            <div className="invisivi"></div>
            <div className="organizacaoDetalhesCurso">
                <div className="imagemCursoDetalhe">
                    <img className='imagemDoCursoDetalhe' src={react} alt="" />  
                </div>
                <div className="detalheCursoCaracteristicas">
                    <div className="nomeCursoEAvalie">
                        <h1 className='nomeCursoDestaques'>Curso de react</h1>
                        <button className='avalie'>Avalie</button>
                    </div>
                    <h1 className="resumo">Resumo do curso</h1>
                    <p className='resumoCursoTexto'>Curso de programação em react do básico ao avançado.</p>
                    <div className="avaliacoesDetalhes">
                        <h1 className="resumo">Avaliação do curso</h1>
                        <h1 className="textoEstiloAnalise1">Muito positivas</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
