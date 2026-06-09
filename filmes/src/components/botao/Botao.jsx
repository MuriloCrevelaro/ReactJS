import "./Botao.css"

const Botao = (props) => {
    return(

        <button className="botao" type={props.Editar ? "button" : "submit"}
        onClick={() => {
            if(props.setEditar){
                props.cancelarEdicao();
                return false;
            }
        }}
        >{props.nomeDoBotao}</button>

    )
}

export default Botao;