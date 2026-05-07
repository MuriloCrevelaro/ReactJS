import "./aluno.css"
import people from"../../assets/react.svg"

const Aluno = ({nome, curso}) => {
    return(
        <div>
            <img src={people} className="Foto"/>
            <p>{nome}</p>
            <p>{curso}</p>
        </div>
    )
}

export default Aluno