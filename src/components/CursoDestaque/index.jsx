let imagemCurso;
let cursoTipo;
let professorCurso;



export const CursoDestaque = () => {
    return (
        <>
        <div className="orgazinazcaoCursosDestaque">
            <div className="cursoDestaqueFoto">
                {imagemCurso}
            </div>
            <p>{cursoTipo}</p>
            <p>{professorCurso}</p>
        </div>
        </>
    )
}