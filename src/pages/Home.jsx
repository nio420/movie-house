import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="relative h-screen overflow-hidden flex flex-col justify-center items-center text-center bg-linear-to-b from-white via-gray-50 to-gray-100 ">
      {/* Content */}
      <div className="relative z-10 text-gray-800 px-6 ">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide animate-fade-in">
          Welcome to <span className="text-red-600">Movie House</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed animate-fade-in-up">
          Discover the world of movies — from timeless classics to the latest
          blockbusters. Your ultimate destination for film lovers.
        </p>

        <Link
          to="/collection"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition transform hover:scale-105 animate-fade-in-up duration-500 "
        >
          Go to Full Site ➔
        </Link>
      </div>

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
