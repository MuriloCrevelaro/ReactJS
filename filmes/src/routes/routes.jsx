import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme";
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero";
import Login from "../pages/login/Login";
import PrivateRoute from "./PrivateRoutes";

const Rotas = () => {
  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/filme" 
          element={
            <PrivateRoute>
              <CadastroFilme />
            </PrivateRoute>} />
        <Route path="/genero"
          element={
            <PrivateRoute>
              <CadastroGenero />
            </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
