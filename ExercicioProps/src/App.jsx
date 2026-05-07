import "./App.css"
import Saudacao from "./components/exercicio01/saudacao"
import Produto from "./components/exercicio02/produto"
import Perfil from "./components/exercicio03/perfil"
import Botao from "./components/exercicio04/botao"
import Filme from "./components/exercicio05/filme"
import Aluno from "./components/exercicio06/aluno"
import Card from "./components/exercicio07/card"
import Contato from "./components/exercicio08/contato"
import Jogo from "./components/exercicio09/jogo"
import ItemLoja from "./components/exercicio10/itemLoja"

const App = () =>{
  const pessoas = [
    {
      id: 1,
      nome: "Carlos",
      idade: 17,
      profissão: "Youtuber"
    },
    {
      id: 2,
      nome: "Barney",
      idade: 16,
      profissão: "Criador de jogos"
    },
  ]

  return(
    // <>
      //  Exercicio01 
      //  <Saudacao nome="Murilo" />
      // <Saudacao nome="Barney" />
      // <Saudacao nome="Lucas" /> 

      //  Exercicio02 
      //    <Produto nome="Batata" preco={8} descricao="Uma raiz"/>
      //   <Produto nome="Banana" preco={10} descricao="Uma fruta"/>
      //   <Produto nome="Tomate" preco={9} descricao="Uma fruta"/> 

      //  Exercicio03 
      //  <Perfil nome="Carlos" idade="18" profissao="Youtuber"/> 
      // pessoas.map((p)=> {
      //   return  <Perfil
      //           key={p.id}
      //           nome={p.nome}
      //           idade={p.idade}
      //           profissao={p.profissao}/>
      // })

      //   //  Exercicio04 
      //   <Botao cor="blue" texto="Babuxas"/>
      //   <Botao cor="green" texto="Fela de uma figa"/>

      //  Exercicio05 
      // <>
      //   <Filme titulo="Missão Impossivel" ano="2008" genero="Ação" nota={9} />
      //   <Filme titulo="Missão Impossivel 2" ano="2010" genero="Ação" nota={9.5} />
      //   <Filme titulo="Missão Impossivel 3" ano="2013" genero="Ação" nota={9.3} /> 
      // </>

      //  Exercicio06 
       <Aluno url="" nome="Carlos" curso="DEV"/> 

      //  Exercicio07 
      //  <Card>
      //   <Saudacao nome="Lucas" />
      //   <Produto nome="Tomate" preco={9} descricao="Uma fruta"/>
      // </Card> 

      //  Exercicio08 
      //  <Contato nome="Carlos" telefone="11 +55 99861-5685" email="carlos@gmail.com"/> 

      //  Exercicio09 
      //  <Jogo nome="PS4" plataforma="PlayStaition" preco={3000}/>  

      // <>
      //   {/* Exercicio10  */}
        // <ItemLoja nome="Controle de TV" preco={30} categoria="Eletronicos" estoque={20}/> 
      // </>

  )
}

export default App