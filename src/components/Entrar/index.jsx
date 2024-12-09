import React, { useState } from 'react';
import '../Cadastro/style.css';
import estudante from '../../assets/estudante.png.png';
import { Link } from 'react-router-dom';
import { MenuFixo } from '../MenuFixo';
import axios from 'axios';


export const Login = () => {

    const baseURL = 'http://localhost:8080/api/v1/'

    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [tipoConta, setTipoConta] = useState(null);

    async function login(e){
        e.preventDefault();
        const headers = {
            'Content-Type': 'application/json',
            Authorization: '',
        };
        let response = await axios({
            method: 'post',
            url: baseURL + 'usuers/login',
            data:{
                Email: emailUsuario,
                Name: nomeUsuario,
                Password: senhaUsuario,
                RoleId: 0
            }
        }
    )
    console.log(response.data)
    }

    const handleRadioChange = (e) => {
        setTipoConta(parseInt(e.target.value, 10));
    };

    return (
        <>
            <MenuFixo></MenuFixo>
            <body>
                <div className='fundo'>
                    <div className="introducao">
                        <h1 className='criarContaTexto'>Crie sua conta</h1>
                        <h1 className='insiraDadosTexto'>Insira os seus dados:</h1>
                    </div>
                    <div className='estudanteEform'>
                        <img className='estudante' src={estudante} alt="" />
                        <div className='formElogin'>
                            <div className='formularioCadastro'>
                                <form className='preencher'>
                                    <input value={nomeUsuario} onChange={(e) =>{setNomeUsuario(e.target.value)}} type="text" className='campo nome' placeholder='Nome' />
                                    <input value={senhaUsuario} onChange={(e) => {setSenhaUsuario(e.target.value)}} type="password" className='campo senha' placeholder='Senha' />
                                    <div className="alternativas">
                                        <h1 className="tipoConta">Tipo de conta:</h1>
                                        <div className="alternativaConta">
                                            <label className='alternativa'>
                                                <input 
                                                    type="radio" 
                                                    name='tipo-conta' 
                                                    className='tipoDeConta' 
                                                    value= {2}
                                                    onChange={handleRadioChange} 
                                                />
                                                Professor
                                            </label>
                                            <label className='alternativa'>
                                                <input 
                                                    type="radio" 
                                                    name='tipo-conta' 
                                                    className='tipoDeConta' 
                                                    value= {1}
                                                    onChange={handleRadioChange} 
                                                />
                                                Aluno
                                            </label>
                                        </div>
                                    </div>
                                </form>
                                <button className='botaoEnviar'  onClick={login}>Enviar</button>
                            </div>
                            <h1 className='verificaLogin'>Deseja criar uma conta? <Link to='/cadastro' className='loginTxt'>Sign In</Link></h1>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};
