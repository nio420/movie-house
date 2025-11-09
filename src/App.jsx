import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Fav from "./pages/Fav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
