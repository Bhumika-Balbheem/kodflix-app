import { useState } from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const posterUrl = movie.Poster && movie.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://via.placeholder.com/300x450/2a2a2a/ffffff?text=No+Image';

  return (
    <div 
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`movie-card__image-container ${isHovered ? 'movie-card__image-container--hovered' : ''}`}>
        <img 
          src={posterUrl} 
          alt={movie.Title}
          className="movie-card__image"
          loading="lazy"
        />
        {isHovered && (
          <div className="movie-card__overlay">
            <div className="movie-card__actions">
              <button className="movie-card__action-btn movie-card__action-btn--play">
                ▶
              </button>
              <button className="movie-card__action-btn">
                +
              </button>
              <button className="movie-card__action-btn">
                👍
              </button>
            </div>
            <div className="movie-card__info">
              <h3 className="movie-card__title">{movie.Title}</h3>
              <div className="movie-card__meta">
                <span className="movie-card__rating">{movie.imdbRating}</span>
                <span className="movie-card__year">{movie.Year}</span>
                <span className="movie-card__runtime">{movie.Runtime}</span>
              </div>
              <div className="movie-card__genres">
                {movie.Genre?.split(', ').slice(0, 2).map((genre, index) => (
                  <span key={index} className="movie-card__genre">{genre}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
