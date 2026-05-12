import CardPerfil from "../card-perfil/card-perfil"
import "./menu.css"

function Menu() {
    return(
        <nav className="menu">
            <a href="#" className="menu__item">Home</a>
            <a href="#" className="menu__item">Quem somos</a>
            <a href="#" className="menu__item">Contato</a>
            <a href="#" className="menu__item menu__item--success">Entrar</a>
            <a href="#" className="menu__item menu__item--button-default">Cadastrar</a>

            <CardPerfil />
        </nav>
    )
}

export default Menu;