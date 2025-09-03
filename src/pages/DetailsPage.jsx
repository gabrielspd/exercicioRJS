import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

export default function DetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (err) {
        setMovie(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>Filme não encontrado.</p>;

  return (
    <div className="movie-details container">
      <h1>{movie.Title} ({movie.Year})</h1>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
      />
      <p><strong>Diretor:</strong> {movie.Director}</p>
      <p><strong>Elenco:</strong> {movie.Actors}</p>
      <p><strong>Sinopse:</strong> {movie.Plot}</p>
      <p><strong>Avaliação:</strong> {movie.imdbRating}</p>
    </div>
  );
}
