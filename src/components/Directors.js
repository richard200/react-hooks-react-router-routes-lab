import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
  <h1>Directors Page</h1>
  {directors.map((director, index)=> (
       <div
       key = {index}>
       {director.name}
     <ul>
       {director.movies.map((movie) => (
        <li key={movie}>{movie}</li>
       )) }
     </ul>
       
     </div>

  ))}

</div>
)
}

export default Directors;
