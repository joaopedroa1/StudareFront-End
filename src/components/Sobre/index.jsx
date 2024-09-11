import './style.css'
import { FaCheck } from "react-icons/fa";
import mulherSobre from '../../assets/mulherSobre.png'

export const About = () => {
    return(
        <section className='sobre'>
        <div className="invisivi"></div>
        <div className="soAqui">
            <hgroup className='textoSoAqui'>
                <h1 className="textoEstilo1">Só aqui você encontra</h1>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Avaliações honestas</p>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Melhores Cursos</p>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Melhor Sistema de <br /> Pesquisa</p>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Acesso Centralizado <br /> a Recursos</p>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Feedback entre os <br /> alunos</p>
                <p className="textoSoAqui"><FaCheck size={24}></FaCheck> Isso e muito mais!</p>
            </hgroup>
            <img className='mulherSobre' src={mulherSobre} alt="" />
        </div>
        <h1 className="textoEstilo1">Avaliação dos nossos alunos</h1>

        </section>
    )
}