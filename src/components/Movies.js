import React from "react";
import { movies } from "../data";

function Movies() {
  

  return (
  <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index)=> (
         <div
         key = {index}>
         Title: {movie.title} 
         Time: {movie.time}
       <ul>
         {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
         )) }
       </ul>
         
       </div>

    ))}
 
  </div>
  )
}

export default Movies;
