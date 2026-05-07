import "./produto.css"

const Produto = ({nome, preco, descricao}) =>{
    return(
        <>
            <p>{nome}</p>
            <p>Preço: R${preco.toFixed(2)}</p>
            <p>{descricao}</p>
        </>
    )
}

export default Produto