// instalar o pacote react-router-dom

import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import Login from "../pages/login/login"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"

const Rotas = () => {
    return(
        <BrowserRouter>
            <nav>
                <Link to="/">Login</Link> {" "}
                <Link to="/filme">Filmes</Link> {" "}
                <Link to="/genero">Gênero</Link> {" "}
            </nav>
            <Routes>
                <Route element={<Login />} path="/"/>
                <Route element={<CadastroFilme />} path="/filme"/>
                <Route element={<CadastroGenero />} path="/genero"/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas