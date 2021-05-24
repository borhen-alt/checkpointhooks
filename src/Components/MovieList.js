import React from 'react';
import MovieCard from "./MovieCard";
const MovieList = ({movies}) => {
    return (
        
            
            <div className="List">
            {
                movies.map ((movie,key)=> (
                    <MovieCard movie={movie} key={key} />

                ))}
            </div>
        
    )
}

export default MovieList;
