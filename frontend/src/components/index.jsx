import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";
import LogoutButton from "../../components/LogoutButton";

function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setError("");
    setLoading(true);

    try {
      const response = await api.get(`/search?q=${query}`);
      setResults(response.data);
    } catch {
      setError("Erro na busca");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Descobrindo Manaus</h2>

      {isAuthenticated && <LogoutButton />}

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar lugares..."
      />

      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Buscando..." : "Buscar"}
      </button>

      {error && <p>{error}</p>}

      <ul>
        {results.map((item, index) => (
          <li key={index}>
            {item.name} — {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
