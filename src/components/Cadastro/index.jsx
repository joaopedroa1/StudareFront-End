import '../Cadastro/style.css'
import estudante from '../../assets/estudante.png.png'
import { Link } from 'react-router-dom';
import { MenuFixo } from '../MenuFixo';

export const Cadastro = () =>{
    return(
        <>
        <MenuFixo></MenuFixo>
        <body>
       <div className='fundo'>
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
                    <div className="alternativas">
                        <h1 className="tipoConta">Tipo de conta:</h1>
                        <div className="alternativaConta">
                            <label className='alternativa'><input type="radio" name='tipo-conta' className='tipoDeConta' />Professor</label>
                            <label className='alternativa'><input type="radio" name='tipo-conta' className='tipoDeConta' />Aluno</label>
                        </div>
                    </div>
                </form>
                <button className='botaoEnviar'>Enviar</button>
            </div>
            <h1 className='verificaLogin'>Já possui uma conta? <Link to = '/login' className='loginTxt'>Login</Link></h1>
            </div>
        </div>
       </div>
        </body>
    </>
    )
}