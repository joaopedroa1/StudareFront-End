import { Link } from 'react-router-dom';
import './style.css';
import { FaUserAlt as FaUser, FaSearch} from 'react-icons/fa'
import logo from '../../assets/logo.svg';
export function MenuFixo(){
    return(
        <nav className='navegacaoStatic'>
            <Link to = '/home'><img src = {logo} alt="logoStudare" className='logoStatic'/></Link>
            <div className="centralizadorListaStatic">
            <li className = 'listaLinksStatic'>
                <Link to = '/categorias' className='linkNavbarStatic'>Categorias </Link>
                <Link to = '/encontrar' className='linkNavbarStatic' >Encontrar</Link>
                <Link to = '/sobre' className='linkNavbarStatic'>Sobre</Link>
            </li>
            </div>
            <div className='searchUserStatic'>
                <div className='lupaUserStatic'>
                    <FaSearch className='iconeLupaStatic'/>
                    <Link to ='/cadastro'><FaUser className='iconeUsuarioStatic'/></Link>
                </div>
            </div> 
        </nav>
    )
}