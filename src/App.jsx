import{BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Cadastro } from './components/Cadastro'
import './App.css'
import { About } from './components/Sobre'
import { HomeProfessor } from './components/HomeProfessor'
import { Encontrar } from './components/Encontrar'
import { MeusCursos } from './components/MeusCursos'
import { CurtidasCurso } from './components/CurtidasMeuCurso'
import { CursoDetalhes } from './components/CursoDetalhes'
import { AddCurso } from './components/AddCurso'
import { PerfilProfessor } from './components/PerfilProfessor'
import { CursoDetalhesIngles } from './components/cursoIngles'
import { CursoDetalhesEdicao } from './components/CursoDetalhesEdicao'
import { Login } from './components/Entrar'
import { CursoDetalhesJava } from './components/CursoDetalhesHTML'
import { CursoDetalhesHTML } from './components/CursoDetalhesJavaB'
import { CursoDetalhesType } from './components/CursoDetalhesType'
import { EncontrarProgramacao } from './components/EncontrarProgramacao'
import { EncontrarIndisponivel } from './components/EncontrarIndisponivel'
import { EncontrarEdicao } from './components/EncontrarEdicao'

export function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cadastro' element = { <Cadastro/> }/>
      <Route path = '/sobre' element = {<About/>}></Route>
      <Route path='/encontrar' element = {<Encontrar/>}></Route>
      <Route path = '/professor' element = {<HomeProfessor/>} ></Route>
      <Route path='/addCurso' element = {<AddCurso/>}></Route>
      <Route path='/meusCursos' element={<MeusCursos></MeusCursos>}></Route>
      <Route path='/avaliacoesCurso' element={<CurtidasCurso/>}></Route>
      <Route path='/cursoDetalhes/cursoreact' element = {<CursoDetalhes/>}></Route>
      <Route path='/perfilProfessor' element={<PerfilProfessor/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/cursosDetalhes/cursodeingles' element={<CursoDetalhesIngles/>}></Route>
      <Route path='/cursosDetalhes/cursodeedicao' element={<CursoDetalhesEdicao/>}></Route>
      <Route path='/cursoDetalhes/cursojava' element={<CursoDetalhesJava/>}></Route>
      <Route path='/cursoDetalhes/cursohtml' element = {<CursoDetalhesHTML/>}></Route>
      <Route path='/cursoDetalhes/cursotype' element= {<CursoDetalhesType/>}></Route>
      <Route path='/encontrar/encontrar=programacao' element ={<EncontrarProgramacao></EncontrarProgramacao>}></Route>
      <Route path='/encontrar/encontrar=economia' element={<EncontrarIndisponivel/>}></Route>
      <Route path='/encontrar/encontrar=edicao' element={<EncontrarEdicao/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

