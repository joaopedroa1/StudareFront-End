import '../Sobre/style.css'
import santana from '../../assets/santana.png'
import { FaCheck } from "react-icons/fa";
import mulherSobre from '../../assets/mulherSobre.png'
import { AvaliacaoAluno } from '../AlunoAvaliacao';

export const About = () => {
    return(
        <section className='sobre'>
        <div className="invisivi"></div>
        <div className="positivas">
            <h1 className="texto1Branco">Destaques</h1>
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
        </div>
        </div>

        </section>
    )
}