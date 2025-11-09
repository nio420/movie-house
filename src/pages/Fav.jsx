import { useMovieContext } from "../Contexts/MovieContext";
import { MovieCard } from "../Component/MovieCard";
import { Link } from "react-router-dom";
import React from "react";

 function Fav() {
  const { fav } = useMovieContext();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white overflow-y-hidden">
      <h1 className="text-3xl md:text-5xl text-red-600 font-extrabold mb-4 tracking-wide animate-fade-in">
        ❤️ <span className="text-black"> Your Favorite</span> Movies   
      </h1>
      {fav.length === 0 ? (
        <div className="text-center ">
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed animate-fade-in-up">
            No favorite movies yet. Start adding some!
          </p>
          <Link
            to="/collection"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105 animate-fade-in-up duration-500 " 
          >
            Browse Movies ➔
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {fav.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
       {/* ✨ Tailwind-based Keyframes */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 2s ease-out forwards;
          }
          .animate-fade-in-up {
            animation: fade-in 1.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
export default React.memo(Fav)