import './App.css'

function App(){
  return(
    <nav className="menu">
        <a href="#" className="menu__item">Home</a>
        <a href="#" className="menu__item">Quem somos</a>
        <a href="#" className="menu__item">Contato</a>
        <a href="#" className="menu__item menu__item--success">Entrar</a>
        <a href="#" className="menu__item menu__item--button-default">Cadastrar</a>

        <div className="card-perfil">
            <img 
                className="card-perfil__image" 
                src="./imagem/KFStark.png" 
                alt="Foto de perfil do usuario"/>
        </div>
    </nav>
  );
}

export default App;