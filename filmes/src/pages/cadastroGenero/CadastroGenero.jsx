import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista";
import "./CadastroGenero.css"
import { useEffect, useState } from "react"
import api from "../../services/services";

const CadastroGenero = () => {
    // States e variaveis
    const [valor, setValor] = useState("")
    const [editar, serEditar] = useState(false)
    const [listaGeneros, setListaGeneros] = useState([
        {idGenero : 1, nome: "Ação"},
        {idGenero : 2, nome: "Romance"}
    ])

    // Cilclo de vida e funções

    //O POST
    const cadastrarGenero = async (e) => {
        e.preventDefault();
        //Validação dos dados preenchidos
        if(valor.trim().length == 0)
        {
            alert("Gênero de ser preenchido antes de cadastrar!")
            return false
        }

        const objCadastro = {
            nome: valor
        }

        try {
            //Cadastra a api, no endpoint do swagger
            const retornoAPI = await api.post("/Genero", objCadastro)

            if(retornoAPI.status == 201){
                alert("Gênero cadastrado com sucesso!")
                //Limpar os campos
                limparFormulario()
                //Chamar o get
            } else {
                alert("Houve algum problema ao cadastrar!")
            }
        } catch (error) {
            alert("Erro na chamada da API")
            console.log(error)
        }
    }

    const limparFormulario = () => {
        setValor("")
    }

    const excluirGenero = async (item) =>{
        console.log(item)
        try {
            const retornoAPI = await api.delete(`/Genero/${item.id}`)
            console.log(retornoAPI)

            getGeneros()
        } catch (error) {
            alert("Erro na chamada da excluir")
            console.log(error)
        }
    }

    const editarGenero = (item) =>{
        console.log(item)
        try {
            
        } catch (error) {
            
        }
    }

    //          (Arrow function)
    // useEffect(fncallback, arrayDependencia)
    useEffect(() => {
        //chamar os dados da api
        getGeneros()
    }, [])

    const getGeneros = async() => {
        try {
            const retornoAPI = await api.get("/Genero")//chama a api
            const dados = retornoAPI.data//extrai os dados retornados
            setListaGeneros(dados)//guarda os dados no state(já existe na lista)
        } catch (error) {
            alert("Erro ao retornar os dados")
        }
    }

    //o jsx
    return(
        <>
            <Header />
                <main>
                    <Cadastro 
                        // Todas elas estão dentro de cadastro.jsx
                            tituloCadastro = "Cadastrode Gênero"
                            // Esconde um dos componentes
                            visibilidade="none"
                            //Por conta que no Cadastro tem um placehouder que pega o valor dele mesmo para colocar no nome do texto
                            placeholder = "gênero"
                            valor={valor}
                            //função que muda o state
                            setValor={setValor}
                            setEdit={setEdit}
                            //A funcCadastro é do Cadastro.jsx
                            //o cadastrarGenero é da qui mesmo
                            funcCadastro={cadastrarGenero}

                            funcEditar={funcEditar}
                    />

                    <Lista 
                        tituloLista="Lista de Gêneros"
                        visibilidade="none"

                        //Chama o método para validar:
                        lista={listaGeneros}
                        //Identifica o tipo de lista:
                        tipoLista="genero"


                        funcExcluir = {excluirGenero}
                        funcEditar = {editarGenero}
                    />

                    {/* O strong é para deixar em negrito */}
                    <p>Gênero que vamos cadastrar <strong>{valor}</strong></p>
                </main>
            <Footer />
        </>
    )
}

export default CadastroGenero