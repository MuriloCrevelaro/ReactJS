import "./CadastroFilme.css"
import Headers from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"

const CadastroFilme = () => {
    return(
        <>
            <Headers />
                <main>
                    <Cadastro 
                        tituloCadastro="Cadastro de Filme"
                    />    
                </main>  
            <Footer />
        </>
    )
}

export default CadastroFilme