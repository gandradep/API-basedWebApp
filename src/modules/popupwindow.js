const getPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then((response) => response.json());

export default getPokemon;