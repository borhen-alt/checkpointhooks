import React,{useState} from 'react';
import MovieList from './Components/MovieList';
import { moviesData } from './Components/moviesData';
import "./App.css";
import AddMovie from './Components/AddMovie';
const App = () => {
const [movies,setMovies]=useState(moviesData);
  return (
    <div>
      <h1>home page</h1>
     <MovieList movies={movies}/>
     <AddMovie/> 
    </div>
  );
};

export default App


