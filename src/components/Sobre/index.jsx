import '../Sobre/style.css'
import santana from '../../assets/santana.png'
import { FaCheck } from "react-icons/fa";
import mulherSobre from '../../assets/mulherSobre.png'
import { AvaliacaoAluno } from '../AlunoAvaliacao';
import { CursoDestaque } from '../CursoDestaque';
import fotoReact from '../../assets/fotoReact.png';
import lohan from '../../assets/lohan.png'
import faraum from '../../assets/faraum.png'
import guh from '../../assets/guh.png'
import { LuBrush } from "react-icons/lu";
import { Cartao } from '../Cartao'
import { CartaoAmarelo } from '../CartaoAmarelo'
import { GiGraduateCap } from "react-icons/gi";
import { CartaoBranco } from '../CartaoBranco'
import { SlBadge } from "react-icons/sl";

export const About = () => {
    return(
        <section className='sobre'>
        <div className="invisivi"></div>
        <div className="positivas">
            <h1 className="texto1Branco">Destaques</h1>
            <div className="organizacaoCursosEmDestaque">
            <CursoDestaque imagemCurso={fotoReact} cursoTipo={'React'} professorCurso={'Prof. Lucas'}></CursoDestaque>
            <CursoDestaque imagemCurso={fotoReact} cursoTipo={'React'} professorCurso={'Prof. Lucas'}></CursoDestaque>
            <CursoDestaque imagemCurso={fotoReact} cursoTipo={'React'} professorCurso={'Prof. Lucas'}></CursoDestaque>
            </div>
        </div>
        <div className="soAqui">
            <hgroup className='textoSoAqui'>
                <h1 className="textoEstilo1 maior">Só aqui você encontra</h1>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Avaliações honestas</p>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Melhores Cursos</p>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Melhor Sistema de Pesquisa</p>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Acesso Centralizado a Recursos</p>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Feedback entre os alunos</p>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Algoritmo eficaz e preciso</p>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Isso e muito mais!</p>
            </hgroup>
            <img className='mulherSobre' src={mulherSobre} alt="" />
        </div>
        <div className="padding112">
            <h1 className="textoEstilo1">Avaliação dos nossos alunos</h1>
            <div className='avaliacoesAlunos'>
            <AvaliacaoAluno imagemAlunoAvAliacao={santana} nomeAlunoAvaliacao={'Gustavo Santana'} textoAlunoAvaliacao={'Passei no vestibular da FUVEST graças a vocês, obrigado!'} avaliacaoPositiva={'Avaliação positiva'}></AvaliacaoAluno>
            <AvaliacaoAluno imagemAlunoAvAliacao={lohan} nomeAlunoAvaliacao={'Lohan Isaque'} textoAlunoAvaliacao={'Muito bom, me ajudou muito a passar no curso que eu precisava!'} avaliacaoPositiva={'Avaliação positiva'}></AvaliacaoAluno>
            <AvaliacaoAluno imagemAlunoAvAliacao={faraum} nomeAlunoAvaliacao={'Danilo Faraum'} textoAlunoAvaliacao={'Eu achei bom, mas acho que dava pra melhorar a estrutura do site.'} avaliacaoPositiva={'Avaliação positiva'}></AvaliacaoAluno>
            <AvaliacaoAluno imagemAlunoAvAliacao={guh} nomeAlunoAvaliacao={'Gusthavo Andrade'} textoAlunoAvaliacao={'Passei na USP graças ao Studare, vocês são feras!'} avaliacaoPositiva={'Avaliação positiva'}></AvaliacaoAluno>
            </div>
        </div>
        <div className="vantagens">
            <h1 className="textoEstilo1">Vantagens do nosso serviço</h1>
            <div className="cartas">
                <div className="cartasOrganizacao">
                <Cartao icon={<LuBrush size = {140}></LuBrush>} textoCartao={'Educação'}/>
                <CartaoAmarelo icon = {<GiGraduateCap size={140}/>} textoCartao={'Conhecimento'} />
                <CartaoBranco icon={<SlBadge size={140}/>} textoCartao={"Confiança"}></CartaoBranco>
                </div>
            </div>
        </div>
        </section>
    )
}