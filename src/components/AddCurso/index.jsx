import './style.css'
import { MenuFixo } from '../MenuFixo';
import PropTypes from 'prop-types';
import prof from '../../assets/renanSilvaDev.png'
import { MeuPerfilColuna } from '../meuPerfilColuna'
import { ProfessorColuna } from '../professorColuna';
import { useState } from 'react';


const ProfInfo = ({fotoProfessor, nomeProfessor, emailProfessor}) =>{
    return(
        <>
        <div className="perfilProfessor">
            <img className='professorFoto' src={fotoProfessor} alt="foto do professor" />
            <h1 className="nomeProfessor">{nomeProfessor}</h1>
            <p className='emailProfessor'>{emailProfessor}</p>
        </div>
        </>
    )
}
ProfInfo.propTypes = {
    fotoProfessor: PropTypes.any,
    nomeProfessor: PropTypes.any,
    emailProfessor: PropTypes.any
}



export const AddCurso = () => {
    const [fileName, setFileName] = useState('');

const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setFileName(file.name); // Atualizar o estado com o nome do arquivo
      }
    };
    return(
        <>
         <MenuFixo></MenuFixo>
        <div className="professorHomeGrid">
            <div className="lateralProfessor">
                <ProfInfo fotoProfessor={prof} nomeProfessor={"Renan Silva Dev"} emailProfessor={'renansilva.dev@gmail.com'}></ProfInfo>
                <div className="alaProfessor">
                    <ProfessorColuna></ProfessorColuna>
                </div>
                <div className="alaMeuPerfilProfessor">
                    <MeuPerfilColuna></MeuPerfilColuna>
                </div>
            </div>
            <div className="corpoProfessor">
                <div className="textoELinha">
                    <h1 className="dia">Adicione um Curso</h1>
                </div>
                <div className="linha"></div>
                <div className="formularioAddCurso">
                    <div className="formularioInfoCurso">  
                        <div className="adicionarFotoCampo">
                            <label htmlFor="fotoInput" className="custom-button">Escolher Foto do Curso</label>
                            <input type="file" id="fotoInput" className="custom-file-input" accept="image/*"onChange={handleFileChange}/>
                        </div>
                        {fileName && (
                            <div id="file-name" style={{ marginTop: '20px', fontSize: '16px', color: '#555' }}>
                                <h1 className='arqSelec'>Arquivo selecionado: {fileName}</h1>
                            </div>
                        )}
                        <div className="nomeECargaHoraria">
                            <div className="nomeCursoOrganizacao">
                                <h1 className="nomeCurso">Nome do curso</h1>
                                <input className='cursoNome' type="text" placeholder='Insira o nome do curso' id='nomeDoCurso'/>
                            </div>
                            <div className="nomeCursoOrganizacao">
                                <h1 className="nomeCurso">Carga horária</h1>
                                <input type="text" className="cargaHoraria" placeholder='Carga horária' id='cargaHoraria' />
                            </div>
                        </div>
                        <div className="resumoCursoOrganizacao">
                            <h1 className="nomeCurso">Resumo do curso</h1>
                            <textarea type="text" className="resumoCurso" id='resumoCurso' placeholder='Resumo do curso'/>
                        </div>
                        <div className="tagsEnviarOrganizacao">
                            <h1 className="nomeCurso">Tags</h1>
                            <input type="text" className='tagsCurso' id='tag' placeholder='Tags do curso' />
                        </div>
                        <div className="botoesConfirmarCurso">
                            <div className="botoesOrganizacao">
                                <button className='cancelarAdicao'>Cancelar</button>
                                <button className='confirmarAdicao'>Confirmar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}