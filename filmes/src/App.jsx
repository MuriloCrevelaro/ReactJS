import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import CadastroFilme from './pages/cadastroFilme/CadastroFilme'
import CadastroGenero from './pages/cadastroGenero/CadastroGenero'
import Rotas from './routes/routes'

function App() {  
  return (
    <>
     <Rotas />
    </>
  )
}

export default App
