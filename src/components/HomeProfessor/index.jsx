import './style.css'
import { MenuFixo } from '../MenuFixo';
import PropTypes from 'prop-types';
import prof from '../../assets/renanSilvaDev.png'
import { MeuPerfilColuna } from '../meuPerfilColuna'
import { ProfessorColuna } from '../professorColuna';

const ProfInfo = ({fotoProfessor, nomeProfessor, emailProfessor}) =>{
    return(
        <>
        <div className="perfilProfessor">
            <img className='professorFoto' src={fotoProfessor} alt="foto do professor" />
            <h1 className="nomeProfessor">{nomeProfessor}</h1>
            <p className='emailProfessor'>{emailProfessor}</p>
        </div>
        </>
    )
}

ProfInfo.propTypes = {
    fotoProfessor: PropTypes.any,
    nomeProfessor: PropTypes.any,
    emailProfessor: PropTypes.any
}

export const HomeProfessor = () =>{
    return(
        <>
        <MenuFixo></MenuFixo>
        <div className="professorHomeGrid">
            <div className="lateralProfessor">
                <ProfInfo fotoProfessor={prof} nomeProfessor={"Renan Silva Dev"} emailProfessor={'renansilva.dev@gmail.com'}></ProfInfo>
                <div className="alaProfessor">
                    <ProfessorColuna></ProfessorColuna>
                </div>
                <div className="alaMeuPerfilProfessor">
                    <MeuPerfilColuna></MeuPerfilColuna>
                </div>
            </div>
            <div className="corpoProfessor">
                <div className="textoELinha">
                    <h1 className="dia">Bom dia usuário!</h1>
                </div>
                <div className="linha"></div>
                <div className='info'>
                        <div className="classificacaoProfessor">
                            <h1 className="avaliacaoTexto">Sua classificação está Positiva!</h1>
                        </div>
                        <div className="quadradosInfo">
                            <div className="linhaQuadrados">
                                <div className="quadradoInfoNum">
                                    <h1 className="avaliacaoTextoDois">18 Cursos adicionados</h1>
                                </div>
                                <div className="quadradoInfoNum">
                                    <h1 className="avaliacaoTextoDois">20 avaliações</h1>
                                </div>
                            </div>
                            <div className="linhaQuadrados">
                                <div className="quadradoInfoNum">
                                    <h1 className="avaliacaoTextoDois">12 Cursos favoritados</h1>
                                </div>
                                <div className="quadradoInfoNum">
                                    <h1 className="avaliacaoTextoDois">2 Rascunhos</h1>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}