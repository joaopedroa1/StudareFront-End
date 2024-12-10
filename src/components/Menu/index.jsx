import { Link } from 'react-router-dom';
import './style.css';
import { FaUserAlt as FaUser} from 'react-icons/fa'
import logo from '../../assets/logo.svg';
export function Menu(){
    return(
        <nav className='navegacao'>
            <Link to = '/home'><img src = {logo} alt="logoStudare" className='logo'/></Link>
            <div className="centralizadorLista">
            <li className = 'listaLinks'>
            <div className="dropdown">
                    <h1 className="linkNavbarCategoria">Categorias</h1>
                    <div className="dropdown-content">
                    <div className="dpConfig">
                            <Link className='linkCategoria' to={'/encontrar/encontrar=economia'}>Pacote World</Link>
                            <Link className='linkCategoria' to={'/encontrar/encontrar=economia'}>Economia</Link>
                            <Link className='linkCategoria' to={'/encontrar/encontrar=programacao'}>Programação</Link>
                            <Link className='linkCategoria' to={'/encontrar/encontrar=edicao'}>Edição</Link>
                       </div>
                    </div>
                </div>
                <Link to = '/encontrar' className='linkNavbar' >Encontrar</Link>
                <Link to = '/sobre' className='linkNavbar'>Sobre</Link>
            </li>
            </div>
            <div className='searchUser'>
                <div className='lupaUser'>
                    <Link to ='/professor'><FaUser className='iconeUsuario'/></Link>
                </div>
            </div> 
        </nav>
    )
}