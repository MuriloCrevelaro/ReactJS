import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista";
import api from "../../services/services";
import Swal from "sweetalert2";
import { Alerta } from "../../components/alerta/Alerta";
import "./CadastroGenero.css"
import { useEffect, useState } from "react"

const CadastroGenero = () => {
    // States e variaveis
    const [valor, setValor] = useState("")
    const [idEditar, setIdEditar] = useState(0)
    const [editar, setEditar] = useState(false)
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
            Alerta({ 
                title: "Cadastro de genero",
                text: "Gênero deve ser preenchido antes de cadastrar!",
                icon:"warning",
                confirmButtonText: "Ok"
            })
            return false
        }

        const objCadastro = {
            nome: valor
        }

        try {
            //Cadastra a api, no endpoint do swagger
            const retornoAPI = await api.post("/Genero", objCadastro)

            if(retornoAPI.status == 201){
                Alerta({
                    title: "Cadastro de gênero",
                    text: `Gênero ${objCadastro.nome} cadastrado com sucesso!`,
                    icon: "success",
                    confirmButtonText: "Ok"
                })
                //Limpar os campos
                limparFormulario()
                //Chamar o get
            } else {
                Alerta({
                    title:"Cadastro de Gênero",
                    text: "Houve algum problema ao cadastrar!",
                    icon:"error",
                    confirmButtonText: "Ok"
                })
            }
        } catch (error) {
            Alerta({
                title:"Cadastro de Gênero",
                text:"Erro na chamada da API",
                icon:"error",
                confirmButtonText: "Ok"
            })
            console.log(error)
        }
    }

    //Tambem vai esconder o botão
    const limparFormulario = () => {
        setValor("")
        //reiniciar o editar
        setEditar(false)
        //zerar o idEditar
        setIdEditar(0)
    }

    const excluirGenero = async (item) =>{
        console.log(item)
        const result = await Alerta({
            title:"Exclusão de Gênero",
            text:"Apagada com sucesso",
            icon:"info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it",
            cancelButtonText: "Cancelar"
        })

        if(!result.isConfirmed){
            return false
        }
        try {
            const retornoAPI = await api.delete(`/Genero/${item.id}`)
        
            if(retornoAPI.status == 204 || retornoAPI.status == 200){
                console.log(retornoAPI)
                Alerta({
                    title:"Exclusão de Gênero",
                    text:"Apagada com sucesso",
                    icon:"success",
                    confirmButtonText: "Ok"
                //     showCancelButton: true,
                //     confirmButtonColor: "#3085d6",
                //     cancelButtonColor: "#d33",
                //     confirmButtonText: "Yes, delete it",
                //     cancelButtonText: "Cancelar"
                // }).then((result) => {
                //     if(result.isConfirmed){
                //         confirmaExclusao = true
                //         console.log(confirmaExclusao)
                //     } else {
                //         confirmaExclusao = false
                //     }
                })
                getGeneros()
            }

            getGeneros()
        } catch (error) {
            Alerta({
                title:"Exclusão de Gênero",
                text:"Erro na chamada da API",
                icon:"error",
                confirmButtonText: "Ok"
            })
            console.log(error)
        }
    }

    const preEditar = (item) => {
        setIdEditar(item.id)
        setValor(item.nome)
        setEditar(true)
        console.log(item)
    }

    const editarGenero = async(e) =>{
        e.preventDefault()

        Alerta({
                title:"Edição de Gênero",
                text:`Cadastra isso logo. Gênero: ${valor} | id: ${idEditar}`,
                icon:"info",
                confirmButtonText: "Ok"
        })

        const objEditar = {
            nome: valor
        }

        try{
            const retornoAPI = await api.put(`/Genero/${idEditar}`, objEditar)
            if(retornoAPI.status == 200){
            Alerta({
                title:"Edição de Gênero",
                text:"Gênero editado com sucesso",
                icon:"success",
                confirmButtonText: "Ok"
            })
                limparFormulario()
                getGeneros()
            } else {
                Alerta({
                title:"Edição de Gênero",
                text:"Algum problema aconteceu ao editar",
                icon:"error",
                confirmButtonText: "Ok"
            })
            }
        } catch (erro) {
            Alerta({
                title:"Edição de Gênero",
                text:"Erro ao chamada da API",
                icon:"error",
                confirmButtonText: "Ok"
            })
            console.log(erro)
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
            Alerta({
                title:"Listagem de Gênero",
                text:"Erro ao retornar os dados",
                icon:"error",
                confirmButtonText: "Ok"
            })
        }
    }

    //o jsx
    return(
        <>
            <Header />
                <main>
                    <Cadastro 
                        // Todas elas estão dentro de cadastro.jsx
                            tituloCadastro = "Cadastro de Gênero"
                            // Esconde um dos componentes
                            visibilidade="none"
                            //Por conta que no Cadastro tem um placehouder que pega o valor dele mesmo para colocar no nome do texto
                            placeholder = "gênero"
                            valor={valor}
                            //função que muda o state
                            setValor={setValor}
                            cancelarEdicao={limparFormulario}
                            //A funcCadastro é do Cadastro.jsx
                            //o cadastrarGenero é da qui mesmo
                            funcCadastro={editar ? editarGenero : cadastrarGenero}
                            btnEditar={editar}
                    />

                    <Lista 
                        tituloLista="Lista de Gêneros"
                        visibilidade="none"

                        //Chama o método para validar:
                        lista={listaGeneros}
                        //Identifica o tipo de lista:
                        tipoLista="genero"


                        funcExcluir = {excluirGenero}
                        funcEditar = {preEditar}
                    />

                    {/* O strong é para deixar em negrito */}
                    <p>Gênero que vamos cadastrar <strong>{valor}</strong></p>
                </main>
            <Footer />
        </>
    )
}

export default CadastroGenero