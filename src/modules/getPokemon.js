export const getPokemon = () => fetch('https://pokeapi.co/api/v2/pokemon')
  .then( async (response) => await response.json());
