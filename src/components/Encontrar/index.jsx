import './style.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from '../Menu';

export const Encontrar = () =>{
    return(
        <>
        <Menu></Menu>
        <div className="invisivi"></div>
        <div className="encontrar">
            <form action="">
                <input className='acharCurso' type="text" placeholder="Digite o curso ou palavra-chave"/>
            </form>
            <div className='filtroECursos'>
                <div className="textoEFiltros">
                    <div className="textF">
                        <h1 className='textoFiltros'> <GiHamburgerMenu size={30}/> Filtros</h1>
                        <div className="filtros">
                            <h1 className="filtroTipo">Duração do curso</h1>
                            <div className="linha"></div>
                                <div className="alternativasFiltro">
                                    <h1 className='filtroTipoDois'><input type="radio" name="tempoCurso" id="tempoFiltro" />Até 20 horas</h1>
                                    <h1 className='filtroTipoDois'><input type="radio" name="tempoCurso" id="tempoFiltro" />Até 40 horas</h1>
                                    <h1 className='filtroTipoDois'><input type="radio" name="tempoCurso" id="tempoFiltro" />Acima de 40 horas</h1>
                                </div>
                            <h1 className="filtroTipo">Avaliações</h1>
                            <div className="linha"></div>
                            <div className="alternativasFiltro">
                                <h1 className="filtroTipoDois"><input type="radio" name="avaliacaoCurso" id="avaliacaoFiltro" />Negativas</h1>
                                <h1 className="filtroTipoDois"><input type="radio" name="avaliacaoCurso" id="avaliacaoFiltro" />Positivas</h1>
                                <h1 className="filtroTipoDois"><input type="radio" name="avaliacaoCurso" id="avaliacaoFiltro" />Extremamente Positivas</h1>
                            </div>
                            <div className="botoesFiltro">
                            <button className="aplFiltros">Aplicar Filtros</button>
                            <button className='aplFiltros' >Zerar filtros</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cursosEncontrar">
                    <div className="cursoTeste">
                        <div className="fotoDoCursoPesquisa">

                        </div>
                        <div className="statsCurso">
                            <h1 className="nomeCursoMaior">Nome do Curso</h1>
                            <div className="descCursoPesquisaDisplay">
                                <p className="descCursoPesquisa"></p>
                            </div>
                            <h1 className="avaliacaoCor">Positivas</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
