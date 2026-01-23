import { useState } from 'react';
import api from '../services/api';

function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  async function handleSearch() {
    setError('');
    setResults([]);

    if (!query) {
      setError('Digite algo para buscar');
      return;
    }

    try {
      const response = await api.get(`/search?q=${query}`);
      setResults(response.data);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'Erro na busca');
      } else {
        setError('Erro ao conectar com o servidor');
      }
    }
  }

  return (
    <div>
      <h2>Descobrindo Manaus</h2>

      <input
        type="text"
        placeholder="Buscar restaurantes, bares, pontos turísticos..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar</button>

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
