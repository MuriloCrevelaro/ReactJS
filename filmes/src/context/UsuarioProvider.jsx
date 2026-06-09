import { useContext, useEffect, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

export const UsuarioProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null)

    //ciclo de vida
    useEffect(()=>{
        //Ao mostrar o componente pega os dados do usuário do localStorage
        const usuarioLogado = JSON.parse(localStorage.getItem("usuario"))
        setUsuario(usuarioLogado)
    },[])
    return (
        <UsuarioContext.Provider
         value={{ 
            usuario, 
            setUsuario }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}