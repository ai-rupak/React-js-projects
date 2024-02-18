
import './App.css';
import SearchIcon from './search.svg'
import { useState } from 'react';
import { useEffect } from 'react';
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=1b548ad3';

const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Type" : "movie",
  "Year" : "2012",
  "imdbID": "tt2586634",
  "Poster": "N/A"
}

const App =() =>{
  const [movies , setMovies] = useState([]);
  const [searchTerm , setSearchTerm ] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className='search'>
        <input
          placeholder='search for movies'
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => {searchMovies(searchTerm)}}
        />
      </div>

      {movies?.length > 0 
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )}
    </div>
  );
}

export default App;
