import './style.css'
import { GiHamburgerMenu } from "react-icons/gi";

export const Encontrar = () =>{
    return(
        <>
        <div className="invisivi"></div>
        <div className="encontrar">
            <form action="">
                <input className='acharCurso' type="text" placeholder="Digite o curso ou palavra-chave"/>
            </form>
            <div className='filtroECursos'>
                <div className="textoEFiltros">
                    <div className="textF">
                        <h1 className='textoFiltros'> <GiHamburgerMenu size={30}/> Filtros</h1>
                    </div>
                </div>
                <div className="cursosEncontrar">
                </div>
            </div>
        </div>
        </>
    )
}
