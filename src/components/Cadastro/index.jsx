import './style.css'
import estudante from '../../assets/estudante.svg'

export const Cadastro = () =>{
    return(
        <>
       <div className='fundo'>
       <div className = 'invisivi'></div>
        <div className="introducao">
            <h1 className='criarContaTexto'>Crie sua conta</h1>
            <h1 className='insiraDadosTexto'>Insira seus dados:</h1>
        </div>
        <div className='estudanteEform'>
            <img src={ estudante } alt="" />
            <div className='formularioCadastro'>
                <form className='preencher' action="">
                    <input type="text" className='campo nome' placeholder='Nome'/>
                    <input type="text" className='campo email'placeholder='E-mail'/>
                    <input type="text" className='campo senha' placeholder='Senha'/>
                    <input type="text" className='campo confirmaSenha' placeholder='Confirmar senha'/>
                </form>
                <button className='botaoEnviar'>Enviar</button>
            </div>
        </div>
       </div>
        </>
    )
}