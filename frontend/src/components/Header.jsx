import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function Header() {
  const { user, isAuthenticated } = useContext(AuthContext);

  return (
    <header style={{ marginBottom: 20 }}>
      <h3>Descobrindo Manaus</h3>

      {isAuthenticated ? (
        <div>
          <span>Olá, {user.name}</span>{" "}
          <LogoutButton />
        </div>
      ) : (
        <Link to="/login">Fazer login</Link>
      )}
    </header>
  );
}

export default Header;
