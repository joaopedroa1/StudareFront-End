import{BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Menu } from './components/Menu'
import './App.css'
export function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

