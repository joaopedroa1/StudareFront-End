import './style.css'
import { Menu } from '../Menu'
import cursoHTML from  '../../assets/HTMLcurso.png'
import { AvaliacaoCurso } from '../AvaliacaoCurso'


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
                        <div className="avaliacoesDoCurso">
                            <AvaliacaoCurso UserName={'Lohan Isaque'} UserAval={'Positiva'} UserAvalText={'Curso muito bem explicado e aprofundado, além do professor ser muito simpático e paciente na resposta de dúvidas!'}/>
                            <div className="linha"></div>
                            <AvaliacaoCurso UserName={'Renan Silva'} UserAval={'Positiva'} UserAvalText={'Ajudou muito com dúvidas que tive durante o meu TCC!'}></AvaliacaoCurso>
                            <div className="linha"></div>
                            <AvaliacaoCurso UserName={'João Pedro'} UserAval={'Positiva'} UserAvalText={'Ótimo curso com videoaulas completas e fórum de dúvidas respondido frequentemente e com atenção!'}></AvaliacaoCurso>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
