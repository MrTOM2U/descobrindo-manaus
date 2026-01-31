import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./Home.css";

export default function Home() {
  const { user, logout } = useContext(AuthContext);

  function handleLogout() {
    const confirm = window.confirm("Deseja realmente sair?");
    if (confirm) {
      logout();
    }
  }

  return (
    <div className="home-container">
      <header className="home-header">
        <h2>Bem-vindo, {user?.name}</h2>
        <button onClick={handleLogout}>Sair</button>
      </header>

      <section className="home-content">
        <p className="empty">
          🚧 Conteúdo em construção.
        </p>
        <p className="subtitle">
          Em breve você poderá visualizar lugares cadastrados aqui.
        </p>
      </section>
    </div>
  );
}
