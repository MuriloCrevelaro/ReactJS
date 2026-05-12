import people from "../../assets/react.svg"
import "./card-perfil.css"

function CardPerfil(){
    return(
            <div className="card-perfil">
                <img 
                className="card-perfil__image" 
                src={people} 
                alt="Foto de perfil do usuario"/>
            </div>
        )
}

export default CardPerfil;