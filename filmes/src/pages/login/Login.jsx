import "./Login.css";
import Logo from "../../assets/img/logo.svg";
import Botao from "../../components/botao/Botao";
import Header from "../../components/header/Header";
import Fotter from "../../components/footer/Footer";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useContext, useState } from "react";

const Login = () => {
  const {usuario, setUsuario} = useContext(UsuarioContext);
  const [novoUsuario, setNovoUsuario] = useState();

  //ciclo de vida e função
  //Guarda o usuário no localStorage no formato JSON
  const login = () => {
    //É salvo no storage - "pendrive" do navegador, serve para salvar as coisas mesmo apos sair ou atualizar
    localStorage.setItem("usuario", JSON.stringify(novoUsuario))//Pega o dado javascript e vira JSON
    setUsuario(novoUsuario)
    setNovoUsuario("")//limpa os dados do usuario
    alert(`Bem vindo ${usuario}`)
  }

  //jsx
    return (
        <div className="container">
            <main className= "main_login">
          <div className="banner"></div>
          <section className="section_login">
            <img src={Logo} alt="Logo do Filmoteca"/>
            <form action="" className="form_login">
                <h1>Login</h1>
                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="Digite seu e-mail"
                            value={novoUsuario}
                            onChange={(e) => {
                            setNovoUsuario(e.target.value)
                        }}/>
                    </div>
                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" placeholder="Digite sua senha"/>
                    </div>
                </div>
                <Botao nomeDoBotao="Entrar" onClick= {() => {
                    login()
                }}/>
            </form>
          </section>
        </main>
        </div>
    );
}

export default Login;