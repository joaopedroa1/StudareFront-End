import { Link } from 'react-router-dom';
import './style.css';
import { FaUserAlt as FaUser, FaSearch} from 'react-icons/fa'
import logo from '../../assets/logo.svg';
export function Menu(){
    return(
        <nav className='navegacao'>
            <Link to = '/home'><img src = {logo} alt="logoStudare" className='logo'/></Link>
            <div className="centralizadorLista">
            <li className = 'listaLinks'>
                <Link to = '/categorias' className='linkNavbar'>Categorias </Link>
                <Link to = '/encontrar' className='linkNavbar' >Encontrar</Link>
                <Link to = '/sobre' className='linkNavbar'>Sobre</Link>
            </li>
            </div>
            <div className='searchUser'>
                <div className='lupaUser'>
                    <FaSearch className='iconeLupa'/>
                    <Link to ='/cadastro'><FaUser className='iconeUsuario'/></Link>
                </div>
            </div> 
        </nav>
    )
}