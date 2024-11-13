import { Link } from 'react-router-dom';
import { TbHomeFilled } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import './style.css'

export const ProfessorColuna = () =>{
    return(
        <>
            <div className="professorOrganizacaoColuna">
                <h1 className="textoColuna">Professor</h1>
                <Link to='/professor'  className="textoColuna"><TbHomeFilled size={23}></TbHomeFilled> Home</Link>
                <Link to='/meusCursos' className="textoColuna"><FaTasks size={23}></FaTasks> Meus Cursos</Link>
                <Link to='/addCurso' className="textoColuna"><IoAddCircleOutline size={23}></IoAddCircleOutline> Adicionar Curso</Link>
                <Link to='/editarCurso' className="textoColuna"><FaBook size={23}></FaBook> Editar Curso</Link>
                <Link to='/avaliacoesCurso' className="textoColuna"><FaHeartCircleCheck size={23}></FaHeartCircleCheck> Avaliações do Curso</Link>
                <Link to='/suaLixeira' className="textoColuna"><FaTrashAlt size={23}></FaTrashAlt> Lixeira</Link>
            </div>
        </>
    )
}