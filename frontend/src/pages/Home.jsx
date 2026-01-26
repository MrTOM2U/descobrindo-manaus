import { useState } from "react";
import api from "../../services/api";
import UserStatus from "../../components/UserStatus";

function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setError("");
    setResults([]);
    setLoading(true);

    if (!query) {
      setError("Digite algo para buscar");
      setLoading(false);
      return;
    }

    try {
      const response = await api.get(`/search?q=${query}`);
      setResults(response.data);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        setError("Erro ao conectar com o servidor");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <UserStatus />

      <h2>Descobrindo Manaus</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar restaurantes, bares, pontos turísticos..."
      />

      <button onClick={handleSearch}>
        {loading ? "Buscando..." : "Buscar"}
      </button>

      {error && <p>{error}</p>}

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

export default Home;
