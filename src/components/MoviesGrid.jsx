import React, { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState(""); //state for the search bar
  const [genre, setGenre] = useState("All Genres"); //state for genre
  const [rating, setRating] = useState("All"); //state for rating

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value); //whatever the user input is
  };

  const handleGenre = (event) => {
    setGenre(event.target.value);
  };

  const handleRating = (event) => {
    setRating(event.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating < 8 && movie.rating >= 5;
      case "Bad":
        return movie.rating > 5;
      default:
        return false;
    }
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearchTerm(movie, searchTerm)
    );
  });

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search movies ..."
        //this is for whatever the user type a new letter
        value={searchTerm}
        onChange={handleSearchTerm}
      />

      <div className="filter-bar">
        <div className="filter-slot ">
          <label>Genre</label>
          <select
            className="filter-dropdown "
            value={genre}
            onChange={handleGenre}
          >
            <option>All Genres</option>
            <option>Drama</option>
            <option>Action</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown "
            value={rating}
            onChange={handleRating}
          >
            <option>All </option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {/* {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })} */}

        {filteredMovies.map((movie) => {
          return (
            <MovieCard
              movie={movie}
              key={movie.id}
              toggleWatchlist={toggleWatchlist}
              isWatchListed={watchlist.includes(movie.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
