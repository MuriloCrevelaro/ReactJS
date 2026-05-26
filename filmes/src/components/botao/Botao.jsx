import "./Botao.css"

const Botao = (props) => {
    return(

        <button 
            className="botao" 
            type={props.btnEditar ? "button" : "submit"}
            onClick = {()=>{
                if(props.btnEditar){
                    //Na verdade chama limparFormulario
                    props.cancelarEdicao()
                    return false
                }
            }}
        >{props.nomeDoBotao}
        </button>

    )
}

export default Botao;