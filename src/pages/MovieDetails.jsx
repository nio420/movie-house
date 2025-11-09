import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../Services/ApiFetch";

function MovieDetails() {
  const { id } = useParams(); // get movie id from route
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}?i=${id}&apikey=${API_KEY}&plot=full`
        );
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        console.log(err);
        setError("Failed to fetch movie details");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-red-500 mb-3">
          {movie.Title}
        </h1>

        {/* Poster */}
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-56 h-auto mx-auto rounded-2xl shadow-md mb-6"
        />
        {/* Genres / Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {movie.Genre?.split(", ").map((genre, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full border border-gray-200"
            >
              {genre}
            </span>
          ))}
        </div>
        {/* Meta info */}
        <div className="meta-info">
          <p className="text-sm text-gray-700 mb-2">
            <strong className="text-red-800"> Runtime: </strong> {movie.Runtime}
          </p>
          <p className="text-sm text-gray-900 mb-2">
            <strong className="text-red-800"> Released: </strong>{" "}
            {movie.Released}
          </p>
          <p className="text-sm text-gray-900 mb-2">
            <strong className="text-red-800"> Director: </strong>{" "}
            {movie.Director}
          </p>
          <p className="text-sm text-gray-900 mb-2">
            <strong className="text-red-800"> Actors: </strong> {movie.Actors}
          </p>
          <p className="text-red-800 text-sm font-semibold mb-5">
            <strong>IMDB Rating:</strong> {movie.imdbRating}⭐
          </p>
        </div>
        {/* Synopsis */}
        <div className="text-left">
          <h2 className="text-lg font-bold text-red-700 mb-2">Synopsis</h2>
          <p className="text-gray-700 leading-relaxed">{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MovieDetails);
