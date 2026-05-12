import Menu from "../src/components/menu/menu";
import './App.css'

function App(){
  return(
    //Tem que ter esse simbulo <> para poder retornar mais de uma coisa
    <>
      <Menu />
      {/* Caso tenha mais de 1 menu ele dá errado por conta da foto */}
      {/* <Menu /> */}
    </>
  );
}

export default App;