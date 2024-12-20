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

export const PerfilProfessor = () =>{
    return(
    <>
        <MenuFixo></MenuFixo>
        <div className="professorHomeGrid">
            <div className="lateralProfessor">
                <ProfInfo fotoProfessor={prof} nomeProfessor={"Usuário"} emailProfessor={'renansilva.dev@gmail.com'}></ProfInfo>
                <div className="alaProfessor">
                    <ProfessorColuna></ProfessorColuna>
                </div>
                <div className="alaMeuPerfilProfessor">
                    <MeuPerfilColuna></MeuPerfilColuna>
                </div>
            </div>
            <div className="corpoProfessor">
            <div className="textoELinha">
                    <h1 className="dia">Seu perfil</h1>
                </div>
                <div className="linha"></div>
            </div>
            </div>
    </>
    )
}