import './style.css'
import { MenuFixo } from '../MenuFixo';
import PropTypes from 'prop-types';
import prof from '../../assets/renanSilvaDev.png'
import { MeuPerfilColuna } from '../meuPerfilColuna'
import { ProfessorColuna } from '../professorColuna';
import python from  '../../assets/Python.png'

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

export const MeusCursos = () =>{
    return(
    <>
        <MenuFixo></MenuFixo>
        <div className="professorHomeGrid">
            <div className="lateralProfessor">
                <ProfInfo fotoProfessor={prof} nomeProfessor={"Usuário"} emailProfessor={'studare@gmail.com'}></ProfInfo>
                <div className="alaProfessor">
                    <ProfessorColuna></ProfessorColuna>
                </div>
                <div className="alaMeuPerfilProfessor">
                    <MeuPerfilColuna></MeuPerfilColuna>
                </div>
            </div>
            <div className="corpoProfessor">
            <div className="textoELinha">
                    <h1 className="dia">Cursos Publicados</h1>
                </div>
                <div className="linha"></div>
                <div className="cursosDisplay">
                    <div className="cursoMostrar">
                        <div className="cursoFotoDisplay"><img className='fotoCursoDisplay' src={python} alt="" /></div>
                        <div className="caracteristicasCurso">
                            <h1 className="nomeCursoDisplay">Curso de Python</h1>
                            <h1 className="caracCursoDisplay">Curso completo de Python, abordando <br /> a linguagem e sua relação fundamental <br /> com o banco de dados.</h1>
                            <h1 className="cargaHorariaCurso">Carga horária: 200</h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </>
    )
}