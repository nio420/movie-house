import { MovieCard } from "../Component/MovieCard";
import React, { useState, useEffect } from "react";
import { getMovies, searchMovies } from "../Services/ApiFetch";

function Collection() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1); //

  const moviesPerPage = 8; //

  const handleSearch = async (e) => {
    e.preventDefault(); // fixed typo
    if (!search.trim()) return;
    if (loading) return;

    // function for search
    setLoading(true);
    try {
      const searchResults = await searchMovies(search);
      setMovies(searchResults);
      setError(null);
      setPage(1); // reset to page 1 when new search happens
    } catch (err) {
      console.log(err);
      setError("failed to search movies ....");
    } finally {
      setLoading(false);
      setSearch("");
    }
  };

  useEffect(() => {
    const showMovies = async () => {
      try {
        const popularMovies = await getMovies();
        setMovies(popularMovies);
        setError(false);
      } catch (err) {
        console.log(err);
        setError("failed to load movies.....");
      } finally {
        setLoading(false);
      }
    };
    showMovies();
  }, []);

  // Pagination logic
  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const nextPage = () => {
    if (indexOfLastMovie < movies.length) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Search Form */}
      <form className="flex justify-center mb-8" onSubmit={handleSearch}>
        <input
          className="w-full text-black max-w-md px-4 py-2 mr-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-black "
          type="text"
          required
          placeholder="Search a movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-r-lg cursor-pointer"
          type="submit"
        >
          Search
        </button>
      </form>

      {/* Movie Grid */}
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="loading">loading.....</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {currentMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))}
          </div>

          {/* Pagination Buttons  */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevPage}
              disabled={page === 1}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-2xl disabled:opacity-100 cursor-pointer"
            >
              Prev
            </button>
            <span className="py-2 font-semibold text-gray-700">
              Page {page}
            </span>
            <button
              onClick={nextPage}
              disabled={indexOfLastMovie >= movies.length}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-2xl disabled:opacity-100  cursor-pointer"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default React.memo(Collection);
