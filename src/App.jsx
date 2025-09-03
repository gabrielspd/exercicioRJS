import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");       
  const [submittedQuery, setSubmittedQuery] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    if (favorites.some(f => f.imdbID === movie.imdbID)) {
      setFavorites(favorites.filter(f => f.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(searchQuery);
  };

  return (
    <Router>
      <header className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo">Catálogo de Filmes</Link>
        </div>
        <div className="nav-center">
          <Link to="/favorites" className="favorites-link">Favoritos</Link>
        </div>
        <div className="nav-right">
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              query={submittedQuery}
            />
          }
        />
        <Route
          path="/favorites"
          element={<FavoritesPage favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}
