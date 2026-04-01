import "./App.css";
import logo from "./assets/learn.svg";


function app() {
  return (
    <main>
      <img src={logo} alt="Logotipo da aplicação" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matricula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label for="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}

export default app;
