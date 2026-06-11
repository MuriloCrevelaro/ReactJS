import "./Botao.css"

const Botao = (props) => {
    return(

        <button className="botao" type={props.Editar ? "button" : "submit"}
        onClick={(e) => {
            e.preventDefault()
            if(props.setEditar){
                props.cancelarEdicao();
                return false;
            }
            if (props.onClick) {
                        props.onClick(e);
                }
        }}
        >{props.nomeDoBotao}</button>

    )
}

export default Botao;