import { Carousel } from '../Carrocel';
import './style.css';
import aluna from '../../assets/aluna.png'
import aluno from '../../assets/aluno.png'
import vest from '../../assets/vest.png'
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


export const Home = () =>{
    const images = [
        aluna,
        aluno,
        vest
    ]
    return (
        <>
        <div className = 'invisivi'></div>
        <div className="homePage">
        <h1 className='boasVindas'>Bem-Vindo ao Studare</h1>
        <div className = 'carrocel'>
            <Carousel images={images} />
        </div>
        <div className='destaques'>
            <h1 className='textoEstilo1'>Destaques</h1>
            <div className="cursosDisponiveis">
                <Curso/>
            </div>
        </div>
            <div className='categorias'>
                <h1 className="textoEstilo1">Categorias</h1>
            </div>
            <div className='categoriaLista'>
                <Categoria icon={<BsWindowDash size={100}/>} text={'Desenvolvimento'}/>
                <Categoria icon={<FaChartBar size={100}/>} text={'Marketing'}/>
                <Categoria icon={<PiMagicWand size={100}/>} text={'Design'}/>
                <Categoria icon={<GiGraduateCap size={100}/>} text={'Vestibular'}/>
            </div>
            <div className='categoriaLista paddingUp'>
                <Categoria icon={<GiPayMoney size={100}/>} text={'Economia'}/>
                <Categoria icon={<FaFileVideo size={100}/>} text={'Edição de vídeo'}/>
                <Categoria icon={<SiAdobephotoshop size={100}/>} text={'Edição de imagem'}/>
                <Categoria icon={<PiCookingPot size={100}/>} text={'Culinária'}/>
            </div>
        </div>
        </>
    )
}