// instalar o pacote react-router-dom

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import Login from "../pages/login/login"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/"/>
                <Route element={<CadastroFilme />} path="/filmes"/>
                <Route element={<CadastroGenero />} path="/generos"/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas