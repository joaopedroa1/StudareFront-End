import{BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Cadastro } from './components/Cadastro'
import './App.css'
import { About } from './components/Sobre'

export function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cadastro' element = { <Cadastro/> }/>
      <Route path = '/sobre' element = {<About/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

