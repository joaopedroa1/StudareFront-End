import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './style.css';
import { MenuFixo } from '../MenuFixo';
import { MeuPerfilColuna } from '../meuPerfilColuna';
import { ProfessorColuna } from '../professorColuna';
import prof from '../../assets/renanSilvaDev.png';

const ProfInfo = ({ fotoProfessor, nomeProfessor, emailProfessor }) => {
    return (
        <div className="perfilProfessor">
            <img className='professorFoto' src={fotoProfessor} alt="foto do professor" />
            <h1 className="nomeProfessor">{nomeProfessor}</h1>
            <p className='emailProfessor'>{emailProfessor}</p>
        </div>
    );
};

ProfInfo.propTypes = {
    fotoProfessor: PropTypes.any,
    nomeProfessor: PropTypes.string,
    emailProfessor: PropTypes.string
};

export const AddCurso = () => {
    const [nomeCurso, setNomeCurso] = useState('');
    const [descCurso, setDescCurso] = useState('');
    const [linkCurso, setLinkCurso] = useState('');
    const [cargaHoraria, setCargaHoraria] = useState('');
    const [fileName, setFileName] = useState('');
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');

    const baseURL = 'http://localhost:8080/api/v1/';

    const postaCurso = async (e) => {
        e.preventDefault();
        const response = await axios.post(baseURL + 'courses', {
            name: nomeCurso,
            description: descCurso,
            link: linkCurso,
            duration: cargaHoraria,
            author: 'Usuário',
            institution: 'Curso',
            tags
        });
        console.log(response.data);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleTagKeyDown = (e) => {
        if (e.key === 'Enter' && tagInput.trim() !== '') {
            e.preventDefault();
            setTags((prevTags) => [...prevTags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const removeTag = (index) => {
        setTags((prevTags) => prevTags.filter((_, i) => i !== index));
    };

    return (
        <>
            <MenuFixo />
            <div className="professorHomeGrid">
                <div className="lateralProfessor">
                    <ProfInfo fotoProfessor={prof} nomeProfessor="Usuário" emailProfessor="studare@gmail.com" />
                    <div className="alaProfessor">
                        <ProfessorColuna />
                    </div>
                    <div className="alaMeuPerfilProfessor">
                        <MeuPerfilColuna />
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
                                <input type="file" id="fotoInput" className="custom-file-input" accept="image/*" onChange={handleFileChange} />
                            </div>
                            {fileName && (
                                <div id="file-name" style={{ marginTop: '20px', fontSize: '16px', color: '#555' }}>
                                    <h1 className='arqSelec'>Arquivo selecionado: {fileName}</h1>
                                </div>
                            )}
                            <div className="nomeECargaHoraria">
                                <div className="nomeCursoOrganizacao">
                                    <h1 className="nomeCurso">Nome do curso</h1>
                                    <input value={nomeCurso} onChange={(e) => setNomeCurso(e.target.value)} className='cursoNome' type="text" placeholder='Insira o nome do curso' id='nomeDoCurso' />
                                </div>
                                <div className="nomeCursoOrganizacao">
                                    <h1 className="nomeCurso">Carga horária</h1>
                                    <input value={cargaHoraria} onChange={(e) => setCargaHoraria(e.target.value)} type="text" className="cargaHoraria" placeholder='Carga horária' id='cargaHoraria' />
                                </div>
                            </div>
                            <div className="resumoCursoOrganizacao">
                                <h1 className="nomeCurso">Resumo do curso</h1>
                                <textarea value={descCurso} onChange={(e) => setDescCurso(e.target.value)} type="text" className="resumoCurso" id='resumoCurso' placeholder='Resumo do curso' />
                            </div>
                            <div className="resumoCursoOrganizacao">
                                <h1 className="nomeCurso">Link do curso</h1>
                                <input value={linkCurso} onChange={(e) => setLinkCurso(e.target.value)} type="text" className='linkCurso' placeholder='Coloque o link do curso' />
                            </div>
                            <div className="tagsEnviarOrganizacao">
                                <h1 className="nomeCurso">Tags</h1>
                                <input
                                    type="text"
                                    className="tagsCurso"
                                    id="tag"
                                    placeholder="Tags do curso"
                                    value={tagInput}
                                    onChange={(e) => setTagInput(e.target.value)}
                                    onKeyDown={handleTagKeyDown}
                                />
                                <div className="tagsContainer">
                                    {tags.map((tag, index) => (
                                        <span key={index} className="tagItem">
                                            #{tag}
                                            <button className="removeTagButton" onClick={() => removeTag(index)}>x</button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="botoesConfirmarCurso">
                                <div className="botoesOrganizacao">
                                    <button className='cancelarAdicao'>Cancelar</button>
                                    <button className='confirmarAdicao' onClick={postaCurso}>Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
