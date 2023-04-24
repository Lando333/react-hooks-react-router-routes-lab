import React from "react";
import { directors } from "../data";

const directorElements = directors.map(director => {
  return <div>
    <h2>Name: {director.name}</h2>
    Movies: 
    <ul>
      {director.movies.map(movie => {
        return <li>
          {movie}
        </li>
      })}
    </ul>
  </div>
})

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directorElements}
  </div>;
}

export default Directors;
