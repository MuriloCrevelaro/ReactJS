import "./produtospage.css"
import fotoProduto from "/images/hero.png"
import { useEffect, useState } from "react"
import axios from "axios"
import api from "../../assets/Services/services"



export const ProdutosPage = () => {
    const[listaProdutos, setListaProdutos] = useState([])
    
    //states
    const [id,setId] = useState(0)
    const [titulo,setTitulo] = useState("")
    const [preco,setPreco] = useState(0)
    const [descricao,setDescricao] = useState("")
    const [imagem,setImagem] = useState("hero.png")
    const [editar,setEditar] = useState(false)

    //function

    //carregar
    useEffect(() => {
        getDados()
    }, [])

    const getDados = async() => {    
            try{
                // Esse /produto serve ara lincar o services.js com esse, fazendo ter a base da url e só colocar coisas adicionais
                const retornoAPI = await api.get("/produto")
                const dados = await retornoAPI.data
                setListaProdutos(dados)
            } catch (erro) {
                console.log(erro)
            }
        }

    const cadastrar = async (e) => {
        e.preventDefault()//Não permite o formulario seja postado
        // validar os dados
        // cadastrar na api
        // chamar a lista novamente
        // ou então, jogar o novo cadastro na listaProdutos

        // validar formulário
        
        if(titulo.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco) || preco <= 0)
        {
            alert("Preencha todos os campos corretamente")
            return false
        }

        const objProduto = {

            titulo: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem

            // isso é igual a:
            // titulo,
            // descricao,
            // preco,
            // imagem
            // Caso eles tenha os mesmos nomes em albos os lugarese
        }
        console.log(objProduto)
        const retornoAPI = await api.post("/produto", objProduto)
        const objetoRetornado = await retornoAPI.data
        console.log(objetoRetornado)
        setListaProdutos([...listaProdutos, objetoRetornado])
        limparFormulario()
    }

    //Limpar Formulario
    function limparFormulario() {
        setId(0)
        setTitulo("")
        setPreco(0)
        setDescricao("")
        setImagem("")
    }

    //Deletar
    const deletar = async (id) => {
        // Ele é um alert diferente que faz uma pergunta e a pessoa pode responder sim ou não 
        if(!confirm ("Você realmente quer apagar o produto?"))
            return false
        try{
            //fazer o fetch para apagar
            const retornoAPI = await api.delete(`/produto/${id}`)

            //Gera a lista de produtos que não foram apagados
            const novaLista = listaProdutos.filter((prod) => {
                return prod.id != id
            })

            if(retornoAPI.status == 200 && retornoAPI.statusText == "OK"){
                alert("Produto apagado com sucesso!")
            } else {
                alert("Erro ao cadastar o produto")
            }
            setListaProdutos(novaLista)
            getDados()
        } catch (erro){}
    }

    const editarProduto = async (e) => {
        e.preventDefault();
        if(titulo.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco) || preco <= 0)
        {
            alert("Preencha todos os campos corretamente")
            return false
        }
        const objProduto = {

            titulo: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem
        }
        
        // criar o objeto Cadastro
        // chamar o fetch com o verbo PUT
        // chamar a função getDados()
        try {
            const retornoAPI = await api.put(`/produto/${id}` , objProduto)
            console.log(retornoAPI);
            if(retornoAPI.status == 200){
                getDados()
                limparFormulario()
                setEditar(false)
            } else {
                alert("Erro ao recarregar os dados")
            }
        } catch (error) {
            alert("Deu erro ao alterar os dados, possível servidor fora do ar")
        }
    }

    return (
        <div className="produtos-page">
        <h1>Cosméticos</h1>

        <form action="" onSubmit={editar ? editarProduto : cadastrar}>
            <fieldset className="cadastro-caixa">
            <div className="linha">
                <label htmlFor="titulo"></label>
                <input className= "input-produto" type="text" placeholder="titulo" id="titulo" value={titulo} onChange={(e) => {
                    setTitulo(e.target.value)
                }}/>
            </div>
            <div className="linha">
                <label htmlFor="preco"></label>
                <input className= "input-produto" type="text" placeholder="preco" id="preco" value={isNaN(preco) ? 0 : preco}
                 onChange={(e) => {
                    setPreco(e.target.value)
                }}/>
            </div>            
            <div className="linha">
                <label htmlFor="descricao"></label>
                <input className= "input-produto" type="text" placeholder="descricao" id="descricao" value={descricao} onChange={(e) => {
                    setDescricao(e.target.value)
                }}/>
            </div> 
            <div className="linha">
                <label htmlFor="img"></label>
                <input className= "input-produto" type="text" placeholder="img" id="img" value={imagem} onChange={(e) => {
                    setImagem(e.target.value)
                }}/>
            </div> 
            <br />
            {/* Só aparece na tela se o editar for true */}
            {editar && (
                <button className="btn-cadastrar"
                onClick={() => {
                    setEditar(false)
                    limparFormulario()
                }}>Cancelar</button>
            )}
            <button className="btn-cadastrar">Salvar</button>
            </fieldset>
        </form>
       
        <br />
        <section className="lista-produtos">
            {listaProdutos.map((p) => {
                return(
                    <article key={p.id} className="card-produto">
                        <img className="foto-produto" src={p.imagem} alt="" />
                        <h2>{p.titulo}</h2>
                        <p>{p.preco}</p>
                        <p>{p.descricao}</p>
                        <a href="" onClick={(e) => {
                            e.preventDefault()
                            deletar(p.id)
                        }}>Apagar</a>
                        <a href="" onClick={(e) => {
                            e.preventDefault()

                            //preenche p formulario
                            setEditar(true)
                            setId(p.id)
                            setTitulo(p.titulo)
                            setPreco(p.preco)
                            setDescricao(p.descricao)
                            setImagem(p.imagem)
                        }}>Editar</a>
                    </article>
                )
            })}
        </section>
        </div>
    )
}