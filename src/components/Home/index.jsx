
import './style.css';
import ingles from '../../assets/cursoIngles.png'
import edicao from '../../assets/edicaoCurso.png'
import { Menu } from '../Menu';
import { Curso } from '../Curso';
import{Categoria} from '../Categoria'
import { BsWindowDash } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";
import { PiMagicWand } from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { FaFileVideo } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { PiCookingPot } from "react-icons/pi";
import {Carroussel} from '../Carrocel'
import reactLogo from '../../assets/fotoReact.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 


export const Home = () =>{

    return (
        <>
        <Menu></Menu>
        <div className = 'invisivi'></div>
        <div className="homePage">
        <h1 className='boasVindas'>Bem-Vindo ao Studare</h1>
        <div className = 'carrocel'>
            <Carroussel></Carroussel>
        </div>
        <div className='destaques'>
            <h1 className='textoEstilo1'>Destaques</h1>
            <div className="cursosDisponiveis">
                <Curso imagemCurso={reactLogo} cursoTipo={"Curso React"} professorCurso={"Prof. Lucas"} analises={"Muito Positivas"} pagLink={'/cursoDetalhes/cursoreact'} />
                <Curso imagemCurso={ingles} cursoTipo={"Curso de inglês"} professorCurso={"Prof. Larissa"} analises={"Positivas"} pagLink={'/cursosDetalhes/cursodeingles'}></Curso>
                <Curso imagemCurso={edicao} cursoTipo={"Curso de edição"} professorCurso={"Prof. Julio"} analises={"Positivas"} pagLink={"/cursosDetalhes/cursodeedicao"}></Curso>
            </div>
        </div>
            <div className='categorias'>
                <h1 className="textoEstilo1">Categorias</h1>
            </div>
            <div className='categoriaLista'>
                <Categoria icon={<BsWindowDash size={100}/>} text={'Programação'}/>
                <Categoria icon={<FaChartBar size={100}/>} text={'Marketing'}/>
                <Categoria icon={<PiMagicWand size={100}/>} text={'Design'}/>
                <Categoria icon={<GiGraduateCap size={100}/>} text={'Vestibular'}/>
            </div>
            <div className='categoriaLista paddingUp'>
                <Categoria icon={<GiPayMoney size={100}/>} text={'Economia'}/>
                <Categoria icon={<FaFileVideo size={100}/>} text={'Edição de vídeo'}/>
                <Categoria icon={<SiAdobephotoshop size={100}/>} text={'Edição de foto'}/>
                <Categoria icon={<PiCookingPot size={100}/>} text={'Culinária'}/>
            </div>
        </div>
        </>
    )
}