import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
    const { setLogado } = useContext(AuthContext);

    const handleLogin = () => {
      setLogado(true);
    }
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleLogin}>Entrar</button>
    </>
  );
}

export default Login;