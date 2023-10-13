import App from "../App";

function NavBar({ pokemonList, pokemonSelect, setPokemonSelect }) {
  function click() {
    pokemonSelect(pokemonList);
  }
  return pokemonList.map((element, index) => (
    <button
      key={element.name}
      onClick={() => {
        setPokemonSelect(index);
      }}
    >
      {" "}
      {element.name}
    </button>
  ));
}

export default NavBar;
