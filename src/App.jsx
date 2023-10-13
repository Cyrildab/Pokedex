import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",

    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    name: "squirtle",

    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },

  {
    name: "pikachu",

    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },

  {
    name: "mew",
  },
];

function App() {
  const [pokemonSelect, setPokemonSelect] = useState(0);

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonSelect]} />
      <NavBar pokemonList={pokemonList} pokemonSelect={pokemonSelect} setPokemonSelect={setPokemonSelect} />
    </div>
  );
}
export default App;
