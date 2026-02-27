import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (movie) {
      setIsLoading(false);
    }
  }, [movie]);

  if (isLoading || !movie) {
    return (
      <div className="hero hero--loading">
        <div className="hero__content">
          <div className="hero__title skeleton"></div>
          <div className="hero__description skeleton"></div>
        </div>
      </div>
    );
  }

  // Use a high-quality backdrop or fallback to poster
  const backdropUrl = movie.Poster && movie.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://via.placeholder.com/1920x1080/141414/ffffff?text=No+Image';

  return (
    <div 
      className="hero"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 0.3) 50%, rgba(20, 20, 20, 1) 100%), url(${backdropUrl})`
      }}
    >
      <div className="hero__content">
        <h1 className="hero__title">{movie.Title}</h1>
        <div className="hero__meta">
          <span className="hero__rating">{movie.imdbRating} Rating</span>
          <span className="hero__year">{movie.Year}</span>
          <span className="hero__runtime">{movie.Runtime}</span>
        </div>
        <p className="hero__description">{movie.Plot}</p>
        <div className="hero__buttons">
          <button className="hero__button hero__button--play">
            <span className="hero__button-icon">▶</span>
            Play
          </button>
          <button className="hero__button hero__button--info">
            <span className="hero__button-icon">ℹ</span>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
