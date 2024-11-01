import './style.css'
import { fotoRenan } from '../../assets/renanSilvaDev.png'
import { ProfInfo } from '../FotoEInfoProfessor';
export const HomeProfessor = () =>{
    return(
        <>
        <div className="invisivi"></div>
        <div className="professorHomeGrid">
            <div className="lateralProfessor">
                <ProfInfo fotoProfessor={fotoRenan} nomeProfessor={"Renan Silva Dev"} emailProfessor={'renansilva.dev@gmail.com'}></ProfInfo>
                <div className="alaProfessor"></div>
                <div className="alaMeuPerfilProfessor"></div>
            </div>
            <div className="corpoProfessor"></div>
        </div>
        </>
    )
}