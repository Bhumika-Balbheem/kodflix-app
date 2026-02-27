const API_KEY = '657d8bf3';
const BASE_URL = 'http://www.omdbapi.com/';

// List of popular movie IDs to fetch
const MOVIE_IDS = [
  'tt3896198', // Guardians of the Galaxy Vol. 2
  'tt0848228', // The Avengers
  'tt4154796', // Avengers: Endgame
  'tt4154756', // Avengers: Infinity War
  'tt0468569', // The Dark Knight
  'tt1375666', // Inception
  'tt0816692', // Interstellar
  'tt0137523', // Fight Club
  'tt0111161', // The Shawshank Redemption
  'tt0068646', // The Godfather
  'tt0071562', // The Godfather Part II
  'tt0050083', // 12 Angry Men
  'tt0108052', // Schindler's List
  'tt0167260', // The Lord of the Rings: The Return of the King
  'tt0133093', // The Matrix
  'tt0099685', // Goodfellas
  'tt0073486', // One Flew Over the Cuckoo's Nest
  'tt0110912', // Pulp Fiction
  'tt0167261', // The Lord of the Rings: The Two Towers
  'tt0120737', // The Lord of the Rings: The Fellowship of the Ring
];

export const fetchMovieById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    const data = await response.json();
    
    if (data.Response === 'True') {
      return data;
    } else {
      console.error('OMDB API Error:', data.Error);
      return null;
    }
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

export const fetchAllMovies = async () => {
  const movies = [];
  
  for (const id of MOVIE_IDS) {
    const movie = await fetchMovieById(id);
    if (movie) {
      movies.push(movie);
    }
  }
  
  return movies;
};

// Group movies by genre for rows
export const groupMoviesByGenre = (movies) => {
  const genres = {};
  
  movies.forEach(movie => {
    if (movie.Genre) {
      const genreList = movie.Genre.split(', ');
      genreList.forEach(genre => {
        if (!genres[genre]) {
          genres[genre] = [];
        }
        genres[genre].push(movie);
      });
    }
  });
  
  return genres;
};
