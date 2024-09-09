import './style.css'
import estudante from '../../assets/estudante.png.png'
import { Link } from 'react-router-dom';

export const Cadastro = () =>{
    return(
        <body>
       <div className='fundo'>
       <div className = 'invisivi'></div>
        <div className="introducao">
            <h1 className='criarContaTexto'>Crie sua conta</h1>
            <h1 className='insiraDadosTexto'>Insira os seus dados:</h1>
        </div>
        <div className='estudanteEform'>
            <img className='estudante' src={ estudante } alt="" />
            <div className='formElogin'>
            <div className='formularioCadastro'>
                <form className='preencher' action="">
                    <input type="text" className='campo nome' placeholder='Nome'/>
                    <input type="text" className='campo email'placeholder='E-mail'/>
                    <input type="text" className='campo senha' placeholder='Senha'/>
                    <input type="text" className='campo confirmaSenha' placeholder='Confirmar senha'/>
                </form>
                <button className='botaoEnviar'>Enviar</button>
            </div>
            <h1 className='verificaLogin'>Já possui uma conta? <Link to = '/login' className='loginTxt'>Login</Link></h1>
            </div>
        </div>
       </div>
        </body>
    )
}