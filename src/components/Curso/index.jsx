import './style.css'

let imagem;
let texto ='Nois come bosta';
let professor = "Prof. Lucas";
let analises = "Muito positivas";

export const Curso = () =>{
    return(
        <>
    <div className = 'organizacaoCurso'>
        <div className='imagemCurso'>{imagem}</div>
        <div className='textoGrupo'>
            <div>
                <h1 className="textoEstilo2">{texto}</h1>
                <h1 className="textoEstilo3">{professor}</h1>
            </div>
        <h1 className="textoEstiloAnalise1">{analises}</h1>
        </div>
    </div>
        </>
    )

}