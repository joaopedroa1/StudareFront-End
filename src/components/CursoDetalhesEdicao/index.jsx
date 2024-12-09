import './style.css'
import PropTypes from 'prop-types';
import { Menu } from '../Menu'
import edicao from  '../../assets/edicaoCurso.png'


export const CursoDetalhesEdicao = () =>{
    return(
        <>
            <Menu/>
            <div className="invisivi"></div>
            <div className="organizacaoDetalhesCurso">
                <div className="imagemCursoDetalhe">
                    <img className='imagemDoCursoDetalhe' src={edicao} alt="" />  
                </div>
                <div className="detalheCursoCaracteristicas">
                    <div className="nomeCursoEAvalie">
                        <h1 className='nomeCursoDestaques'>Curso de Edição</h1>
                        <button className='avalie'>Avalie</button>
                    </div>
                    <h1 className="resumo">Resumo do curso</h1>
                    <p className='resumoCursoTexto'>Curso de edição avançado, abordando platadormas feitas para imagens, como o Photoshop, ou para edição audiovisual, como o Adobe Premiere</p>
                    <div className="avaliacoesDetalhes">
                        <h1 className="resumo">Avaliação do curso</h1>
                        <h1 className="textoEstiloAnalise1">Positivas</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
