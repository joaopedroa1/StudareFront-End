import './style.css'
import { CursoDestaque } from '../CursoDestaque'

export const About = () => {
    return(
        <>
        <div className="invisivi"></div>
        <div className='positivas'>
            <h1 className="texto1Branco">
                Destaques
            </h1>
            <div className="cursosDestaque">
                <CursoDestaque></CursoDestaque>
            </div>
        </div>
        </>
    )
}