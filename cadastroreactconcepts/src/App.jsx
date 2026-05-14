import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/homepage'
import QuemSomosPage from './pages/quemomos/quemsomospage'
import CadastroFrutas from './pages/cadastrofrutas/cadastrofrutaspage'
import Header from './header/header'
import { ProdutosPage } from './pages/produtos/produtospage'

function App() {
  return(
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<QuemSomosPage />} path="/quemsomos" />
          <Route element={<CadastroFrutas />} path="/cadastrofrutas" />
          <Route element={<ProdutosPage />} path="/produtos" />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
