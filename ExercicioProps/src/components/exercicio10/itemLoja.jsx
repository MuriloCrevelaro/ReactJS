import "./itemLoja.css"

const ItemLoja = ({nome, preco, categoria, estoque}) => {
    if (estoque > 0){
        return (
            <article>
                <h1>"Produto disponível"</h1>
                    <p>{nome}</p>
                    <p>{preco.toFixed(2)}</p>
                    <p>{categoria}</p>
                    <p>{estoque}</p>
            </article>
        )
    }else{
        return ("Produto indisponível")
    }
}

export default ItemLoja 