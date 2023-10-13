function NavBar({ setPokemonIndex, pokemonList }) {
  const handlOnClick = (index) => {
    setPokemonIndex(index);
  };

  return (
    <div>
      {pokemonList.map((pokemonList, index) => (
        <button
          key={pokemonList.name}
          onClick={() => {
            handlOnClick(index);
          }}
        >
          {pokemonList.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
