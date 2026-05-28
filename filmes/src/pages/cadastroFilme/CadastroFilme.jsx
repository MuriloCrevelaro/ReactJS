import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista";
import api from "../../services/services";
import { Alerta } from "../../components/alerta/Alerta";
import "./CadastroFilme.css"
import { useEffect, useState } from "react"

const CadastroFilme = () => {
// States e variaveis
    const [listaGeneros, setListaGeneros] = useState([
        {idGenero : 1, nome: "Ação"},
        {idGenero : 2, nome: "Romance"},
        {idGenero : 3, nome: "Comedia"},
        {idGenero : 4, nome: "Terror"},
    ])
    const [listaFilmes, setListaFilmes] = useState([
        {
            titulo: "As Branquelas",
            id: "1",
            genero: "Comédia"
        },
    ])
    const [valor, setValor] = useState("")
    const [idEditar, setIdEditar] = useState(0)
    const [editar, setEditar] = useState(false)

    // Cilclo de vida e funções

    //O POST
    const cadastrarFilme = async (e) => {
        e.preventDefault();
        //Validação dos dados preenchidos
        if(valor.trim().length == 0)
        {
            Alerta({ 
                title: "Cadastro de Filme",
                text: "Filme deve ser preenchido antes de cadastrar!",
                icon:"warning",
                confirmButtonText: "Ok"
            })
            return false
        }

        const objCadastro = {
            titulo: valor,
            genero: {"nome" : listaGeneros},
        }

        try {
            //Cadastra a api, no endpoint do swagger
            const retornoAPI = await api.post("/Filme", objCadastro)

            if(retornoAPI.status == 201){
                Alerta({
                    title: "Cadastro de Filme",
                    text: `Filme ${objCadastro.titulo} cadastrado com sucesso!`,
                    icon: "success",
                    confirmButtonText: "Ok"
                })
                //Limpar os campos
                limparFormulario()
                //Chamar o get
            } else {
                Alerta({
                    title:"Cadastro de Filme",
                    text: "Houve algum problema ao cadastrar!",
                    icon:"error",
                    confirmButtonText: "Ok"
                })
            }
        } catch (error) {
            Alerta({
                title:"Cadastro de Filme",
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

    const excluirFilme = async (item) =>{
        console.log(item)
        const result = await Alerta({
            title:"Exclusão de Filme",
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
            const retornoAPI = await api.delete(`/Filme/${item.id}`)
        
            if(retornoAPI.status == 204 || retornoAPI.status == 200){
                console.log(retornoAPI)
                Alerta({
                    title:"Exclusão de Filme",
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
                getFilmes()
            }

            getFilmes()
        } catch (error) {
            Alerta({
                title:"Exclusão de Filme",
                text:"Erro na chamada da API",
                icon:"error",
                confirmButtonText: "Ok"
            })
            console.log(error)
        }
    }

    const preEditar = (item) => {
        setIdEditar(item.id)
        setValor(item.titulo)
        setEditar(true)
        console.log(item)
    }

    const editarFilme = async(e) =>{
        e.preventDefault()

        Alerta({
                title:"Edição de Filme",
                text:`Cadastra isso logo. Filme: ${valor} | id: ${idEditar}`,
                icon:"info",
                confirmButtonText: "Ok"
        })

        const objEditar = {
            titulo: valor
        }

        try{
            const retornoAPI = await api.put(`/Filme/${idEditar}`, objEditar)
            if(retornoAPI.status == 200){
            Alerta({
                title:"Edição de Filme",
                text:"Filme editado com sucesso",
                icon:"success",
                confirmButtonText: "Ok"
            })
                limparFormulario()
                getFilmes()
            } else {
                Alerta({
                title:"Edição de Filme",
                text:"Algum problema aconteceu ao editar",
                icon:"error",
                confirmButtonText: "Ok"
            })
            }
        } catch (erro) {
            Alerta({
                title:"Edição de Filme",
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
        getFilmes()
    }, [])

    const getFilmes = async() => {
        try {
            const retornoAPI = await api.get("/Filme")//chama a api
            const dados = retornoAPI.data//extrai os dados retornados
            setListaFilmes(dados)//guarda os dados no state(já existe na lista)
        } catch (error) {
            Alerta({
                title:"Listagem de Filme",
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
                            tituloCadastro = "Cadastro de Filme"
                            //Por conta que no Cadastro tem um placehouder que pega o valor dele mesmo para colocar no nome do texto
                            placeholder = "Filme"
                            valor={valor}
                            //função que muda o state
                            setValor={setValor}
                            cancelarEdicao={limparFormulario}
                            //A funcCadastro é do Cadastro.jsx
                            //o cadastrarFilme é da qui mesmo
                            funcCadastro={editar ? editarFilme : cadastrarFilme}
                            btnEditar={editar}
                            listaGeneros = {listaGeneros}
                    />

                    <Lista 
                        tituloLista="Lista de Filmes"
                        //Chama o método para validar:
                        lista={listaFilmes}
                        //Identifica o tipo de lista:
                        tipoLista="filme"


                        funcExcluir = {excluirFilme}
                        funcEditar = {preEditar}
                    />

                    {/* O strong é para deixar em negrito */}
                    <p>Filme que vamos cadastrar <strong>{valor}</strong></p>
                </main>
            <Footer />
        </>
    )
}

export default CadastroFilme