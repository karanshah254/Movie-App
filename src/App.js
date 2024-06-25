import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './components/MovieCard';
// e2dd0b9e
const URL = "http://www.omdbapi.com/?apikey=e2dd0b9e&";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Watch Movies for free!!</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, id) => (
            <MovieCard movie={movie} key={id} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
