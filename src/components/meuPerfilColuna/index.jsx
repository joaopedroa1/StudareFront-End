import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";
import { RiSketching } from "react-icons/ri";

import { FaDoorOpen } from "react-icons/fa";
import './style.css'

export const MeuPerfilColuna = () =>{
    return(
        <>
            <div className="perfilOrganizacaoColuna">
                <h1 className="textoColuna">Meu Perfil</h1>
                <Link to='/editarPerfilProfessor' className="textoColuna"><FaUser size={23}></FaUser> Editar Perfil</Link>
                <Link to='/cursosFavoritos' className="textoColuna"><CiStar size={23}></CiStar> Favoritos</Link>
                <Link to='/meusRascunhos' className="textoColuna"><RiSketching size={23}></RiSketching> Rascunhos</Link>
                <Link className="textoColuna"><FaDoorOpen size={23}></FaDoorOpen> Sair</Link>
            </div>
        </>
    )
}