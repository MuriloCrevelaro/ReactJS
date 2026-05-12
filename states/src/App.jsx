import {useState} from "react"
import Contador from "./components/contador/contador"
import CadFruta from "./components/cadFruta/cadFruta"
import CicloDeVida from "./components/siclodevida/ciclodevida"

function App() {
  //Conyrola se o componente vai ser mostrado na tela ou não
  const [mostra, setMostrar] = useState(true)
  // //objeto privado
  // const [nome, setNome] = useState("Google")

  // // Só assim para trocar o nome, caso tenha setNome
  // // setNome = Murilo
  // function trocarTexto(){
  //   setNome("Microsoft")
  // }

  // function fuiAbandonado(){
  //   setNome("Input foi abandonado :(")
  // }

  return (
    // <>
    //   <h1>{nome} Page</h1>
    //   <button onClick={trocarTexto}>Mudar texto</button>
    //   <button onClick={() => {
    //     return setNome("Yahoo")
    //   }}>Mudar texto</button>
    //   {/* evento - evento disparado: change */}
    //   {/* target - quem disparou o evento change */}
    //   {/* value - valor do input que disparou o evento change */}
    //   <input typpe="text" onBlur={fuiAbandonado} onChange={(evento) => setNome(evento.target.value)}/>
    //   <Contador />
    // </>
      <>
       {/* <CadFruta /> */}
       <button onClick={() => {
        setMostrar(!mostra);
       }}>Mostrsr / Ocultar</button>
       {mostra && <CicloDeVida />}
      </>
    )
}

export default App