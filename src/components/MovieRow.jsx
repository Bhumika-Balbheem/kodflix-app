import { useRef, useState } from 'react';
import MovieCard from './MovieCard';
import './MovieRow.css';

const MovieRow = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      const scrollAmount = direction === 'left' ? -400 : 400;
      
      rowRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      setTimeout(() => {
        if (rowRef.current) {
          setIsScrolled(rowRef.current.scrollLeft > 0);
          setShowRightArrow(
            rowRef.current.scrollLeft + rowRef.current.clientWidth < rowRef.current.scrollWidth - 10
          );
        }
      }, 300);
    }
  };

  const handleScrollEvent = () => {
    if (rowRef.current) {
      setIsScrolled(rowRef.current.scrollLeft > 0);
      setShowRightArrow(
        rowRef.current.scrollLeft + rowRef.current.clientWidth < rowRef.current.scrollWidth - 10
      );
    }
  };

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="movie-row">
      <h2 className="movie-row__title">{title}</h2>
      <div className="movie-row__container">
        {isScrolled && (
          <button 
            className="movie-row__arrow movie-row__arrow--left"
            onClick={() => handleScroll('left')}
          >
            ‹
          </button>
        )}
        <div 
          className="movie-row__slider"
          ref={rowRef}
          onScroll={handleScrollEvent}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
        {showRightArrow && (
          <button 
            className="movie-row__arrow movie-row__arrow--right"
            onClick={() => handleScroll('right')}
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieRow;
