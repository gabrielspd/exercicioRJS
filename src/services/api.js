const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export async function fetchMovies(query, page = 1) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(data.Error);
  }
  return data;
}

export async function fetchMovieDetails(id) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(data.Error);
  }
  return data;
}
