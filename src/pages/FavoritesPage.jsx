import React from "react";
import MovieCard from "../components/MovieCard";

export default function FavoritesPage({ favorites, toggleFavorite }) {
  return (
    <div className="container">
      <h1>Filmes Favoritos</h1>
      {favorites.length === 0 && <p>Nenhum favorito adicionado.</p>}
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
}
