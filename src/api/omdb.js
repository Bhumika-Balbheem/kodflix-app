const API_KEY = '657d8bf3';
const BASE_URL = 'https://www.omdbapi.com/';

// Sample movie data as fallback
const SAMPLE_MOVIES = [
  {
    imdbID: 'tt3896198',
    Title: 'Guardians of the Galaxy Vol. 2',
    Year: '2017',
    Runtime: '136 min',
    Genre: 'Action, Adventure, Comedy',
    Plot: 'The Guardians struggle to keep together as a team while dealing with their personal family issues.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
    imdbRating: '7.6'
  },
  {
    imdbID: 'tt0848228',
    Title: 'The Avengers',
    Year: '2012',
    Runtime: '143 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Plot: 'Earth\'s mightiest heroes must come together and learn to fight as a team.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    imdbRating: '8.0'
  },
  {
    imdbID: 'tt4154796',
    Title: 'Avengers: Endgame',
    Year: '2019',
    Runtime: '181 min',
    Genre: 'Action, Adventure, Drama',
    Plot: 'After the devastating events of Infinity War, the universe is in ruins.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    imdbRating: '8.4'
  },
  {
    imdbID: 'tt0468569',
    Title: 'The Dark Knight',
    Year: '2008',
    Runtime: '152 min',
    Genre: 'Action, Crime, Drama',
    Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    imdbRating: '9.0'
  },
  {
    imdbID: 'tt1375666',
    Title: 'Inception',
    Year: '2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Sci-Fi',
    Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    imdbRating: '8.8'
  },
  {
    imdbID: 'tt0133093',
    Title: 'The Matrix',
    Year: '1999',
    Runtime: '136 min',
    Genre: 'Action, Sci-Fi',
    Plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    imdbRating: '8.7'
  },
  {
    imdbID: 'tt0111161',
    Title: 'The Shawshank Redemption',
    Year: '1994',
    Runtime: '142 min',
    Genre: 'Drama',
    Plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
    imdbRating: '9.3'
  },
  {
    imdbID: 'tt0068646',
    Title: 'The Godfather',
    Year: '1972',
    Runtime: '175 min',
    Genre: 'Crime, Drama',
    Plot: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    imdbRating: '9.2'
  }
];

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
  let apiFailed = false;
  
  // Try to fetch from API first
  for (const id of MOVIE_IDS.slice(0, 3)) { // Try first 3 to check if API works
    try {
      const movie = await fetchMovieById(id);
      if (movie) {
        movies.push(movie);
      }
    } catch (error) {
      console.warn('API fetch failed, will use fallback data');
      apiFailed = true;
      break;
    }
  }
  
  // If API failed or returned no movies, use sample data
  if (apiFailed || movies.length === 0) {
    console.log('Using sample movie data as fallback');
    return SAMPLE_MOVIES;
  }
  
  // Continue fetching remaining movies if API works
  for (const id of MOVIE_IDS.slice(3)) {
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
