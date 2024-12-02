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
                <h1 className="textoColuna">Usuário</h1>
                <Link to='/perfilProfessor' className="textoColuna amarelo"><FaUser size={23}></FaUser> Meu Perfil</Link>
                <Link className="textoColuna amarelo"><FaDoorOpen size={23}></FaDoorOpen> Sair</Link>
            </div>
        </>
    )
}