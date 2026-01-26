import { useEffect, useState } from 'react';
import api from '../services/api';

function Home() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // debounce control
  const [debounceTimer, setDebounceTimer] = useState(null);

  function handleInput(value) {
    setQuery(value);
    setError('');

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      if (value.trim()) {
        handleSearch(value);
      }
    }, 600);

    setDebounceTimer(timer);
  }

  async function handleSearch(searchValue) {
    setLoading(true);
    setResults([]);

    try {
      const response = await api.get(`/search?q=${searchValue}`);
      setResults(response.data);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || 'Erro na busca');
      } else {
        setError('Erro ao conectar com o servidor');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: '40px auto' }}>
      <h2>Descobrindo Manaus</h2>

      <input
        type="text"
        placeholder="Buscar restaurantes, bares, pontos turísticos..."
        value={query}
        onChange={(e) => handleInput(e.target.value)}
        style={{ width: '100%', padding: 10 }}
      />

      {loading && <p>Buscando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

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
