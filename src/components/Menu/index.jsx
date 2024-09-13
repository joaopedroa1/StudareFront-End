import { Link } from 'react-router-dom';
import './style.css';
import {FaPlus, FaUserAlt as FaUser, FaSearch} from 'react-icons/fa'
import logo from '../../assets/logo.svg';
export function Menu(){
    return(
        <nav className='navegacao'>
            <Link to = '/home'><img src = {logo} alt="logoStudare" className='logo'/></Link>
            <li className = 'listaLinks'>
                <Link to = '/categorias' className='linkNav'>Categorias </Link>
                <Link to = '/catalogar' className='linkNav' >Encontre um curso</Link>
                <Link to = '/sobre' className='linkNav'>Sobre</Link>
            </li>
            <div className='searchUser'>
                <button className='botaoAvaliar'> Avalie <FaPlus className = 'add'/></button>
                <div className='lupaUser'>
                    <FaSearch className='iconeLupa'/>
                    <Link to ='/cadastro'><FaUser className='iconeUsuario'/></Link>
                </div>
            </div> 
        </nav>
    )
}