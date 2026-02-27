import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieRow from './components/MovieRow';
import { fetchAllMovies, groupMoviesByGenre } from './api/omdb';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [groupedMovies, setGroupedMovies] = useState({});
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        const fetchedMovies = await fetchAllMovies();
        
        if (fetchedMovies.length > 0) {
          setMovies(fetchedMovies);
          setFeaturedMovie(fetchedMovies[0]);
          
          const grouped = groupMoviesByGenre(fetchedMovies);
          setGroupedMovies(grouped);
        } else {
          setError('No movies found. Please check your API key and try again.');
        }
      } catch (err) {
        setError('Failed to fetch movies. Please try again later.');
        console.error('Error loading movies:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <p>Loading movies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error-screen">
          <h2>Error</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <Hero movie={featuredMovie} />
      <div className="app__content">
        {Object.entries(groupedMovies).map(([genre, genreMovies]) => (
          <MovieRow 
            key={genre} 
            title={genre} 
            movies={genreMovies} 
          />
        ))}
      </div>
      <footer className="app__footer">
        <p>&copy; 2026 Kodflix. All rights reserved.</p>
        <p>Data provided by OMDB API</p>
      </footer>
    </div>
  );
}

export default App
