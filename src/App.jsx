import{BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Cadastro } from './components/Cadastro'
import './App.css'
import { About } from './components/Sobre'
import { HomeProfessor } from './components/HomeProfessor'
import { Encontrar } from './components/Encontrar'


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
    </Routes>
    </BrowserRouter>
    </>
  )
}

