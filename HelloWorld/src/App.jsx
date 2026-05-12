import './App.css'
import Paragrafo from './components/paragrafo/paragrafo';
import Title from './components/titulo/titulo'

function App() {
  return (
    <>
      <Title nome="Murilo" sobrenome="Crevelaro "texto="Bem vindo, sou Título" />
      <Title texto="Eu sou outro Título" />
      <Paragrafo textoParagrafo="Eu sou o Paragrafo" />
    </>
  );
}

export default App;
