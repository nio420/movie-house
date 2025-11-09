import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 text-black shadow-md sticky top-0 z-50 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        {/* Brand */}
        <div className="text-2xl font-extrabold text-red-500 hover:text-red-400 transition-colors duration-300">
          <NavLink to="/">🎬 Movie House</NavLink>
        </div>

        {/* Hamburger (Mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isActive ? "text-red-500" : "hover:text-red-500 text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isActive ? "text-red-500" : "hover:text-red-500 text-black"
              }`
            }
          >
            Collection
          </NavLink>

          <NavLink
            to="/fav"
            className={({ isActive }) =>
              `font-medium transition-colors duration-300 ${
                isActive ? "text-red-500" : "hover:text-red-500 text-black"
              }`
            }
          >
            Favorite
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 border-t border-gray-300">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-6 py-3 transition-colors duration-300 ${
                isActive ? "text-red-500" : "text-black hover:text-red-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/collection"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-6 py-3 transition-colors duration-300 ${
                isActive ? "text-red-500" : "text-black hover:text-red-500"
              }`
            }
          >
            Collection
          </NavLink>

          <NavLink
            to="/fav"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-6 py-3 transition-colors duration-300 ${
                isActive ? "text-red-500" : "text-black hover:text-red-500"
              }`
            }
          >
            Favorite
          </NavLink>
        </div>
      )}
    </nav>
  );
}
