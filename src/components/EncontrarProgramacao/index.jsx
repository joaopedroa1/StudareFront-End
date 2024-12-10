import './style.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from '../Menu';
import cursoJavaBonito from '../../assets/cursoDeJavaDois.png';
import { Link } from 'react-router-dom';
import cursoHTML from '../../assets/HTMLcurso.png';
import cursoType from '../../assets/typeCurso.png'

export const EncontrarProgramacao = () =>{
    return(
        <>
        <Menu></Menu>
        <div className="invisivi"></div>
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
                            <Link to='/cursoDetalhes/cursohtml'><img className='cursoEncontrarFoto' src={cursoHTML} alt="" /></Link>
                        </div>
                        <div className="statsCurso">
                            <h1 className="nomeCursoMaior">Curso HTML e CSS</h1>
                            <div className="descCursoPesquisaDisplay">
                                <p className="descCursoPesquisa">Curso de programação completo HTML e CSS, do básico ao avançado.</p>
                            </div>
                            <h1 className="avaliacaoCor">Muito Positivas</h1>
                        </div>
                    </div>
                    <div className="cursoTeste">
                        <div className="fotoDoCursoPesquisa">
                            <Link to='/cursoDetalhes/cursojava'><img className='cursoEncontrarFoto' src={cursoJavaBonito} alt="" /></Link>
                        </div>
                        <div className="statsCurso">
                            <h1 className="nomeCursoMaior">Curso Java</h1>
                            <div className="descCursoPesquisaDisplay">
                                <p className="descCursoPesquisa">Curso de programação básica em Java e Javascript avançado no front-end.</p>
                            </div>
                            <h1 className="avaliacaoCor">Positivas</h1>
                        </div>
                    </div>
                    <div className="cursoTeste">
                        <div className="fotoDoCursoPesquisa">
                            <Link to='/cursoDetalhes/cursotype'><img className='cursoEncontrarFoto' src={cursoType} alt="" /></Link>
                        </div>
                        <div className="statsCurso">
                            <h1 className="nomeCursoMaior">Curso TypeScript</h1>
                            <div className="descCursoPesquisaDisplay">
                                <p className="descCursoPesquisa">Curso de programação em TypeScript, buscando ensinar tudo do programa.</p>
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
