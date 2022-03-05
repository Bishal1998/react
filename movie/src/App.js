import React from 'react';
import './App.css';
import SearchIcon from './search.svg';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import NoMovie from './NoMovie';

const API_URL ="http://www.omdbapi.com?apikey=#####";

const movie1 = {
  "Title": "Shark Tale",
  "Year": "2004",
  "imdbID": "tt0307453",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxMjY0NzE2M15BMl5BanBnXkFtZTcwNTc3ODcyMw@@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState();

    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search );
    }

    useEffect(() => {
      searchMovies(searchTerm);
    }, [])
    

  return (
    <div className='app'>
        <h1>MovieHub</h1>

        <div className='search'>
            <input 
                type="text"
                placeholder='Search for Movies' 
                value = {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)
            }/>
            <img src={SearchIcon} alt="search" 
            onClick={() => searchMovies(searchTerm)}/>    
        </div>

        {movies?.length > 0 
          ? (
              <div className='container'>
                {movies.map((movie) => (<MovieCard movie = {movie}/>))}
              </div>
            ) : (
              <div className='container'>
                <NoMovie movie = {movie1}/>
              </div>
            )
        }


    </div>
  )
}

export default App
