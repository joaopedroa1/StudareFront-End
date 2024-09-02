import{BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import { Cadastro } from './components/Cadastro'
import './App.css'

export function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cadastro' element = { <Cadastro/> }/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

