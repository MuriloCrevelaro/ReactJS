import people from "../../assets/react.svg"
import "./jogo.css"

const Jogo = ({nome, plataforma, preco}) => {
    return(
    <div className="container">
        <img src={people}/>
        <p>{nome}</p>
        <p>{plataforma}</p>
        <p>{preco.toFixed(2)}</p>
    </div>)
}

export default Jogo