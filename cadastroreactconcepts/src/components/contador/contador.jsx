import { useState } from "react"
import "./contador.css"

const Contador = () => {
    const[valor, setValor] = useState(0)

    function incrementar() {
        // if (valor > 10) {
            setValor(valor + 1)
        // } else {
        //     setValor(0)
        // }
    }
    function decremento() {
        // if (valor < 0) {
            setValor(valor - 1)
        // } else {
        //     setValor(0)
        // }
    }

//          ou

    function recetar() {
        setValor(0)
    }

    if (valor == 10) {
        return(
            <>
                <span>Viciado</span>

                <p>Contagem: {valor}</p>
                <button onClick={recetar}> recetar </button>
            </>
        )
    } else if(valor < 0){
        return(
        <>
            <p>Não pode ser número negativo</p>
                <button onClick={recetar}> recetar </button>
        </>
        )
    } else{
        return(
        <>
            <p>Contagem: {valor}</p>
            {/* Não pode usar a função com () pois ela acaba dando erro! */}
            <button onClick={incrementar}>+1</button>
            <button onClick={decremento}>-1</button>
        </>
        )
    }
}

export default Contador