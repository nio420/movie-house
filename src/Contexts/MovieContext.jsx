import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => {
  return useContext(MovieContext);
};

export default function MovieProvider({ children }) {
  const [fav, setFav] = useState([]);

  // Load favorites from localStorage when app starts
  useEffect(() => {
    const storedValue = localStorage.getItem("fav");
    if (storedValue) setFav(JSON.parse(storedValue));
  }, []);

  // Save favorites whenever it changes
  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  // Add movie
  const addToFav = (movie) => {
    setFav((prev) => [...prev, movie]);
  };

  // Remove movie by ID
  const removeToFav = (imdbID ) => {
    setFav((prev) => prev.filter((movie) => movie.imdbID  !== imdbID ));
  };

  // Check if a movie is favorite
  const isFav = (imdbID ) => {
    return fav.some((movie) => movie.imdbID  === imdbID );
  };

  const value = {
    fav,
    addToFav,
    removeToFav,
    isFav,
  };

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
}
