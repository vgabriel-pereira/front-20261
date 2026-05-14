import { Link, NavLink } from "react-router";
import "./Menu.css";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
function Menu() {
  const usuarioId = 0;

  const { setLogado } = useContext(AuthContext);

  const handleSair = () => {
    setLogado(false);
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={`/perfil/${usuarioId}`}>Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Configurações</NavLink>
        </li>
        <li>
          <Link to="/" onClick={handleSair}>
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
