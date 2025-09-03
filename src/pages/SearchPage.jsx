import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../services/api";

export default function SearchPage({ favorites, toggleFavorite, query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      setPage(1);
      setTotalResults(0);
      setError(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMovies(query, page);
        if (data.Response === "False") {
          setMovies([]);
          setTotalResults(0);
          setError(data.Error);
        } else {
          setMovies(data.Search);
          setTotalResults(parseInt(data.totalResults));
        }
      } catch (err) {
        setMovies([]);
        setTotalResults(0);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="container">
      {loading && <p>Carregando...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && movies.length === 0 && query && (
        <p>Nenhum filme encontrado para "{query}"</p>
      )}

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onFavorite={toggleFavorite}
            isFavorite={favorites.some(f => f.imdbID === movie.imdbID)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Anterior
          </button>
          <span>{page} / {totalPages}</span>
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}
