import "./CadastroGenero.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react";
import api from "/src/services/services";
//import Swal from 'sweetalert2' 
import {Alerta} from "../../components/alerta/Alerta"


const CadastroGenero = () => {

    //states e variáveis
    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([
    ])
    const [editar, setEditar] = useState(false)
    const [idEditar, setIdEditar] = useState(null)
    //ciclo de vida e funções 

    //POST
    const cadastrarGenero = async (e) => {
        e.preventDefault();

        if (valor.trim().length === 0) {
            Alerta({
                title: 'Atenção',
                text: 'O nome do gênero não pode estar em branco.',
                icon: 'warning',
                confirmButtonText: 'Ok',
            })
            return;
        }

        const objCadastro = {
            Nome: valor
        };

        try {
            const retornoAPI = await api.post("/Genero", objCadastro);
            limparFormulario();
            getGeneros();
            Alerta({
                title: 'Cadastro realizado com sucesso!',
                text: 'O gênero foi cadastrado com sucesso!',
                icon: 'success',
                confirmButtonText: 'Ok',
                });

        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);
            Alerta({
                title: 'Erro na chamada da API',
                text: 'Verifique os dados e tente novamente!',
                icon: 'error',
                confirmButtonText: 'Ok',
                });
    }};
    const limparFormulario = () => {
        setValor("");
        setEditar(false);
        setIdEditar(null);
    };

const excluirGenero = async (item) => {

    const result = await Alerta({
        title: 'Excluir Gênero',
        text: `Tem certeza que deseja excluir o gênero ${item.nome}?`,
        icon: 'warning',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        showCancelButton: true,
        confirmButtonColor: '#85f085ff',
        cancelButtonColor: '#ff6666ff',
        });
    if (!result.isConfirmed) {
        return;
    }

    try {

        await api.delete(`/Genero/${item.idGenero}`);

        getGeneros();
        limparFormulario();

        Alerta({
            title: 'Excluído!',
            text: `O gênero ${item.nome} foi excluído com sucesso!`,
            icon: 'success',
            confirmButtonText: 'Ok',
            });

    } catch (error) {

        console.log("STATUS:", error.response?.status);
        console.log("DATA:", error.response?.data);
        console.log("ERRO COMPLETO:", error);

        Alerta({
            title: 'Erro',
            text: 'Erro ao excluir gênero!',
            icon: 'error',
            confirmButtonText: 'Ok',
            });
    }
};

    const preEditar = (item) => {
        setValor(item.nome);
        setIdEditar(item.idGenero);
        setEditar(true);
        console.log(item);
    };

    const editarGenero = async (e) => {
        setEditar(false);
        e.preventDefault();
        const objCadastro = {
            idGenero: idEditar,
            nome: valor
        };
        try {
            const retornoAPI = await api.put(`/Genero/${idEditar}`, objCadastro);
            limparFormulario();
            getGeneros();
        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);
            Alerta({
                title: 'Erro na chamada da API',
                text: 'Verifique os dados e tente novamente!',
                icon: 'error',
                confirmButtonText: 'Ok',
                });
        }
    }
    useEffect(() => {
        getGeneros();
    }, [])

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero");
            const dados = retornoAPI.data;
            setListaGeneros(dados);
        } catch (error) {
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);
            console.log("ERRO COMPLETO:", error);
            Alerta({
                title: 'Erro na chamada da API',
                text: 'Verifique os dados e tente novamente!',
                icon: 'error',
                confirmButtonText: 'Ok',
                });
        }
    };
    //o jsx
    return (
        <>
            <Header />

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gêneros"
                    visibilidade="none"
                    placeholder="gênero"
                    valor={valor}
                    //função que muda o state
                    setValor={setValor}
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                    btnEditar={editar}
                    cancelarEdicao={limparFormulario}
                />
                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"
                    tipoLista="genero"
                    lista={listaGeneros}
                    setEditar={setEditar}
                    setValor={setValor}
                    valor={valor}
                    funcEditar={preEditar}
                    funcExcluir={excluirGenero}
                />
            </main>

            <Footer />
        </>
    );
}
export default CadastroGenero;