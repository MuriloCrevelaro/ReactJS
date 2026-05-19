import "./produtospage.css"
import fotoProduto from "/images/hero.png"
import { useEffect, useState } from "react"



export const ProdutosPage = () => {
    const[listaProdutos, setListaProdutos] = useState([])
    
    //states
    const [preco,setPreco] = useState(0)
    const [descricao,setDescricao] = useState("")
    const [imagem,setImagem] = useState("hero.png")
    const [titulo,setTitulo] = useState("")

    //function

    //carregar
    useEffect(() => {
        const getDados = async() => {    
            try{
                const retornoAPI = await fetch ("http://localhost:3000/produtos")
                const dados = await retornoAPI.json()
                setListaProdutos(dados)
            } catch (erro) {
                console.log(erro)
            }
        }
        getDados()
    }, [])

    const cadastrar = async (e) => {
        e.preventDefault()//Não permite o formulario seja postado
        // validar os dados
        // cadastrar na api
        // chamar a lista novamente
        // ou então, jogar o novo cadastro na listaProdutos

        if(titulo.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco))
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
        const retornoAPI = await fetch ("http://localhost:3000/produtos", {
            method: "POST",
            body: JSON.stringify(objProduto),
            header: {
                "Content-Type" : "application/json; charset=UFT-8"
            }
        })
        const objetoRetornado = await retornoAPI.json()
        console.log(objetoRetornado)
        setListaProdutos([...listaProdutos, objetoRetornado])

    }

    //Deletar
    const deletar = async (id) => {
        try{
            //fazer o fetch para apagar
            const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`,{
                method: "DELETE"
            })

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

    return (
        <div className="produtos-page">
        <h1>Cosméticos</h1>

        <form action="" onSubmit={cadastrar}>
            <fieldset className="cadastro-caixa">
            <div className="linha">
                <label htmlFor="titulo"></label>
                <input className= "input-produto" type="text" placeholder="titulo" id="titulo" onChange={(e) => {
                    setTitulo(e.target.value)
                }}/>
            </div>
            <div className="linha">
                <label htmlFor="preco"></label>
                <input className= "input-produto" type="text" placeholder="preco" id="preco" onChange={(e) => {
                    setPreco(e.target.value)
                }}/>
            </div>            
            <div className="linha">
                <label htmlFor="descricao"></label>
                <input className= "input-produto" type="text" placeholder="descricao" id="descricao" onChange={(e) => {
                    setDescricao(e.target.value)
                }}/>
            </div> 
            <div className="linha">
                <label htmlFor="img"></label>
                <input className= "input-produto" type="text" placeholder="img" id="img" onChange={(e) => {
                    setImagem(e.target.value)
                }}/>
            </div> 
            <br />
            <button className="btn-cadastrar">Cadastrar</button>
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
                    </article>
                )
            })}
        </section>
        </div>
    )
}