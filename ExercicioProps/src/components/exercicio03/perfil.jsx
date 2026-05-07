import "./perfil.css"

const Perfil = ({nome, idade, profissao}) => {
    return(
        <article className="card-perfil">
            <span className="card-perfil__title">Nome</span><span className="card-perfil__description">{nome}</span>
            <span>Idade:</span><span>{idade}</span>
            <span>Profissão</span><span>{profissao}</span>
        </article>
    )
}

export default Perfil