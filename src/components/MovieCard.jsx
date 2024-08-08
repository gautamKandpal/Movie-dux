import React from "react";
import "../styles.css";

function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  //error handling
  const handleError = (event) => {
    event.target.src = "images/default.jpg"; //for setting the default img
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating < 8 && rating >= 5) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info ">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre"> {movie.genre} </span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          ></input>

          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}{" "}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default MovieCard;
