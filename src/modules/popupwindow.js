const getPokemonDetails = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url)
    .then((response) => response.json());
}


export default getPokemonDetails;
