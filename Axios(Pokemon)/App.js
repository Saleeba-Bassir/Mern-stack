
import './App.css';
import React, { useState } from "react";
import axios from "axios";

function App() {
const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={fetchPokemons}>Fetch Pokemon!</button>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
