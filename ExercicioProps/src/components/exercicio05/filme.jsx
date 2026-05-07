import "./filme.css"

const Filme = ({titulo, ano, genero, nota}) => {
    return(
        <>
            <p>{titulo}</p>
            <p>{ano}</p>
            <p>{genero}</p>
            <p>{nota.toFixed(1)}</p>
        </>
    )
}

export default Filme