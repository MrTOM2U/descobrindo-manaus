import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import LogoutButton from "../../components/LogoutButton";
import "./Home.css";

export default function Home() {
  const { user, isAuthenticated } = useContext(AuthContext);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    // 🔒 BLOQUEIO DE BUSCA SEM LOGIN
    if (!isAuthenticated) {
      setError("Faça login para realizar buscas.");
      return;
    }

    if (!query.trim()) {
      setError("Digite algo para buscar.");
      return;
    }

    setError("");
    setResults([]);

    try {
      setLoading(true);
      const response = await api.get(`/search?q=${query}`);
      setResults(response.data);
    } catch {
      setError("Erro ao buscar resultados.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <header style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <h2>Descobrindo Manaus</h2>
        {isAuthenticated && <span>Olá, {user?.name}</span>}
        {isAuthenticated && <LogoutButton />}
      </header>

      <input
        type="text"
        placeholder="Buscar restaurantes, bares, pontos turísticos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Buscando resultados...</p>}
      {error && <p>{error}</p>}

      {!loading && results.length === 0 && query && !error && (
        <p>Nenhum resultado encontrado.</p>
      )}

      <ul>
        {results.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> — {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
