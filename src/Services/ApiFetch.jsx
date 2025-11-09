const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export { API_KEY, BASE_URL };

// Get default movies
export const getMovies = async (query = "movie", page = 1) => {
  const keywords = [
    "Avengers",
    "Inception",
    "Matrix",
    "Joker",
    "Titanic",
    "Batman",
  ];
  const random = keywords[Math.floor(Math.random() * keywords.length)];
  const res = await fetch(
    `${BASE_URL}?s=${encodeURIComponent(
      random
    )}&${query}&apikey=${API_KEY}&page=${page}`
  );
  const data = await res.json();
  return data.Search || [];
};

//Search movies by query
export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
  );
  const data = await res.json();
  return data.Search || [];
};
