import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"
import { Navigate } from "react-router-dom"

//Componente de rotas privadas
const PrivateRoute = ({children}) => {
    //Recupera o state global do usuario(Vem o UsuarioProvider)
    const usuario = useContext(UsuarioContext)

    //Não logado? Volta do inicio
    return usuario ? children : <Navigate to="/" />
}

export default PrivateRoute