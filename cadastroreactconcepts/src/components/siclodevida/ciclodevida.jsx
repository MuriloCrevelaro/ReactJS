import { useEffect, useState } from "react";
import "./ciclodevida.css"

export default function CicloDeVida() {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        console.log("Componente MONTADO");
        return () => {
            console.log("Componente DESMONTADO");
        }
    }, [])

    useEffect(() => {
        console.log("Componente ATUALIZADO")
        console.log(`Valor do contador ${contador}`)
    }, [contador])

    return (
        <>
        <h1>Contador: {contador}</h1>
        <button onClick={() => {
            setContador(contador + 1);
        }}>Contar</button>
        </>
    );
}