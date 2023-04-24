import React from "react";
import { movies } from "../data";

const movieElements = movies.map(movie => {
  return <div>
    <h2>{movie.title}</h2>
    Time: {movie.time} <br /><br />
    Genres:<br />
    <ul>
      {movie.genres.map(genre => {
        return <li>
          {genre}  
        </li>
      })}
    </ul>
  </div>
})

function Movies() {
  return <div>
    <h1>
      Movies Page
    </h1>
    {movieElements}
  </div>;
}

export default Movies;
