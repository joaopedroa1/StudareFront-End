import { Link } from 'react-router-dom'
import './style.css'
import logo from '../../assets/logo.svg'
export function Menu(){
    return(
        <nav className='navegacao'>
            <Link to = '/home'><img src = {logo} alt="" className='logo'/></Link>
            <li className = 'listaLinks'>
                <Link to = '/categorias' className='linkNav'>Categorias</Link>
                <Link to = '/catalogar' className='linkNav' >Catalogue um curso</Link>
                <Link to = '/sobre' className='linkNav'>Sobre</Link>
            </li>
            <div className='searchUser'>
                <button className='botaoAvaliar'> Avalie</button>
            </div> 
        </nav>
    )
}