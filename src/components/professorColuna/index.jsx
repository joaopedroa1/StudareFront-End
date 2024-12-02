import { Link } from 'react-router-dom';
import { TbHomeFilled } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import './style.css'

export const ProfessorColuna = () =>{
    return(
        <>
            <div className="professorOrganizacaoColuna">
                <h1 className="textoColuna">Professor</h1>
                <Link to='/professor'  className="textoColuna amarelo"><TbHomeFilled size={23}></TbHomeFilled> Home</Link>
                <Link to='/meusCursos' className="textoColuna amarelo"><FaTasks size={23}></FaTasks> Meus Cursos</Link>
                <Link to='/addCurso' className="textoColuna amarelo"><IoAddCircleOutline size={23}></IoAddCircleOutline> Adicionar Curso</Link>
                <Link to='/avaliacoesCurso' className="textoColuna amarelo"><FaHeartCircleCheck size={23}></FaHeartCircleCheck> Avaliações do Curso</Link>
            </div>
        </>
    )
}