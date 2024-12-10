import './style.css'
import { Menu } from '../Menu'
import typeCurso from  '../../assets/typeCurso.png'


export const CursoDetalhesType = () =>{
    return(
        <>
            <Menu/>
            <div className="invisivi"></div>
            <div className="organizacaoDetalhesCurso">
                <div className="imagemCursoDetalhe">
                    <img className='imagemDoCursoDetalhe' src={typeCurso} alt="" />  
                </div>
                <div className="detalheCursoCaracteristicas">
                    <div className="nomeCursoEAvalie">
                        <h1 className='nomeCursoDestaques'>Curso TypeScript</h1>
                        <button className='avalie'>Avalie</button>
                    </div>
                    <h1 className="resumo">Resumo do curso</h1>
                    <p className='resumoCursoTexto'>Curso de programação em TypeScript, buscando ensinar tudo do software.</p>
                    <div className="avaliacoesDetalhes">
                        <h1 className="resumo">Avaliação do curso</h1>
                        <h1 className="textoEstiloAnalise1">Muit Positivas</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
