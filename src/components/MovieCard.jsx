import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, onFavorite, isFavorite }) {
  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=Sem+Imagem+Disponível";

  return (
    <div className="movie-card">
      <div className="card-image-wrapper">
        <Link to={`/details/${movie.imdbID}`}>
          <img src={poster} alt={movie.Title} />
        </Link>
        <button
          className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
          onClick={() => onFavorite(movie)}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
      <h3 className="movie-title">{movie.Title}</h3>
    </div>
  );
}
