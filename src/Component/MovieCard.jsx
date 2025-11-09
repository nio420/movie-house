import React from "react";
import { useMovieContext } from "../Contexts/MovieContext";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  const { addToFav, removeToFav, isFav } = useMovieContext(); // ✅ FIXED

  const favorite = isFav(movie.imdbID);

  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 w-72 text-center m-5">
        {/* Poster */}
        <div className="relative cursor-pointer">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-48 object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                favorite ? removeToFav(movie.imdbID) : addToFav(movie);
              }}
              className={`mt-3 px-3 py-2 rounded-3xl font-medium cursor-pointer ${
                favorite
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {favorite ? "❤️ Remove " : "🤍 Add "}
            </button>
          </div>
        </div>

        {/* Details */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{movie.Title}</h3>
          <p className="text-sm text-gray-500 mt-1">{movie.Year}</p>
          <p className="text-sm text-gray-500 mt-1">{movie.Type}</p>
        </div>
      </div>
    </Link>
  );
};
