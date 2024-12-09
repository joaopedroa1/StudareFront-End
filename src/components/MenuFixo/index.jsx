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
            <div className="dropdown">
                    <h1 className="linkNavbarCategoria">Categorias</h1>
                    <div className="dropdown-content">
                       <div className="dpConfig">
                            <Link className='linkCategoria' to={'http://localhost:5173/encontrar?encontrar=matematica'}>Matemática</Link>
                            <Link className='linkCategoria' to={'http://localhost:5173/encontrar?encontrar=historia'}>História</Link>
                            <Link className='linkCategoria' to={'http://localhost:5173/encontrar?encontrar=programacao'}>Programação</Link>
                            <Link className='linkCategoria' to={'http://localhost:5173/encontrar?encontrar=edicao'}>Edição</Link>
                       </div>
                    </div>
                </div>
                <Link to = '/encontrar' className='linkNavbarStatic' >Encontrar</Link>
                <Link to = '/sobre' className='linkNavbarStatic'>Sobre</Link>
            </li>
            </div>
            <div className='searchUserStatic'>
                <div className='lupaUserStatic'>
                    <Link to ='/professor'><FaUser className='iconeUsuarioStatic'/></Link>
                </div>
            </div> 
        </nav>
    )
}