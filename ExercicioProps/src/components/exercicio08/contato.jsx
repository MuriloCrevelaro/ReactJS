import "./contato.css"

const Contato = ({nome, telefone, email}) => {
    return(
        <>
            <p>{nome}</p>
            <p>{telefone}</p>
            <p>{email}</p>
        </>
    )
}

export default Contato