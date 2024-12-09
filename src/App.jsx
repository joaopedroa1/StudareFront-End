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
import { Login } from './components/Entrar'

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
      <Route path='/cursoDetalhes' element = {<CursoDetalhes/>}></Route>
      <Route path='/perfilProfessor' element={<PerfilProfessor/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

