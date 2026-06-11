import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Header = () => {
    const {usuario} = useContext(UsuarioContext)

    return (
        <header>
            <div className="layout_grid cabecalho">
                {/* Ao clicar no link, redireciona para a tela login */}
                <Link to="/">
                    <img src={Logo} alt="Logo do Filmoteca" />
                </Link>

                <nav className="nav_header">
                    <Link className="link_header" to="/Filme">Filme</Link>
                    <Link className="link_header" to="/Genero">Gênero</Link>
                    <h2>{usuario}</h2> 
                </nav>
            </div>
        </header>
    )
}

export default Header;