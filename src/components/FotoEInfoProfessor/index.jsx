import './style.css'
import PropTypes from 'prop-types';

export const ProfInfo = ({fotoProfessor, nomeProfessor, emailProfessor}) =>{
    return(
        <>
        <div className="perfilProfessor">
            <img className='professorFoto' src={fotoProfessor} alt="foto do professor" />
            <h1 className="nomeProfessor">{nomeProfessor}</h1>
            <script className='emailProfessor'>{emailProfessor}</script>
        </div>
        </>
    )
}


ProfInfo.propTypes = {
    fotoProfessor: PropTypes.any,
    nomeProfessor: PropTypes.any,
    emailProfessor: PropTypes.any
}