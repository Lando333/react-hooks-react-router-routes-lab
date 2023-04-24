import React from "react";
import { actors } from "../data";


const actorElements = actors.map(actor => {
  return <div>
    <h2>Name: {actor.name}</h2>
    Movies:
    <ul>
      {actor.movies.map(movie => {
        return <li>
          {movie}
        </li>
      })}
    </ul>
  </div>
})

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actorElements}
  </div>;
}

export default Actors;
