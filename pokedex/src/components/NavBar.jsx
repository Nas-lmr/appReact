function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const precedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  const suivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
      {pokemonIndex > 0 && <button onClick={precedent}>Précédent</button>}

      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={suivant}>Suivant</button>
      )}
    </div>
  );
}

export default NavBar;
