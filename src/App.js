import "./App.css";
import "./styles.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieGrid from "./components/MoviesGrid";
import Watchlist from "./components/WatchList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]); //state for the movie
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []); //useffect(function(),what condition to re-render changes )

  const toggleWatchlist = (movieId) => {
    setWatchList((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header />

        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/watchlist"> Watchlist </Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MovieGrid
                  watchlist={watchList}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  watchlist={watchList}
                  movies={movies}
                  toggleWatchlist={toggleWatchlist}
                />
              }
            ></Route>
          </Routes>
        </Router>

        {/* <MovieGrid /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
